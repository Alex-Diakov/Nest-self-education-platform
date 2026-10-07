/**
 * NextSelf Resilient typed persistence & cache manager
 * Protects against QuotaExceededError, private browsing restrictions, corrupted JSON, and stale schema drift.
 */

const STORAGE_VERSION = 'v1.2.0';
const STORAGE_PREFIX = 'nextself_';

interface StorageEnvelope<T> {
  version: string;
  timestamp: number;
  data: T;
}

class StorageService {
  private memoryFallback: Map<string, string> = new Map();

  private getFullKey(key: string): string {
    return key.startsWith(STORAGE_PREFIX) ? key : `${STORAGE_PREFIX}${key}`;
  }

  getItem<T>(key: string, defaultValue: T): T {
    const fullKey = this.getFullKey(key);

    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const raw = window.localStorage.getItem(fullKey);
        if (raw !== null) {
          try {
            const parsed = JSON.parse(raw);
            // Check if stored with envelope
            if (parsed && typeof parsed === 'object' && 'version' in parsed && 'data' in parsed) {
              return (parsed as StorageEnvelope<T>).data;
            }
            return parsed as T;
          } catch (e) {
            // Malformed JSON: clear bad entry and return default
            console.warn(`[NextSelf Storage] Corrupted entry for "${fullKey}". Resetting to default.`, e);
            window.localStorage.removeItem(fullKey);
            return defaultValue;
          }
        }
      }
    } catch (e) {
      // SecurityError in restrictive iframes / private browsing
      console.warn(`[NextSelf Storage] LocalStorage read failed for "${fullKey}". Using memory fallback.`, e);
    }

    // Fall back to memory map
    const memItem = this.memoryFallback.get(fullKey);
    if (memItem) {
      try {
        const parsed = JSON.parse(memItem);
        if (parsed && typeof parsed === 'object' && 'version' in parsed && 'data' in parsed) {
          return (parsed as StorageEnvelope<T>).data;
        }
        return parsed as T;
      } catch {
        return defaultValue;
      }
    }

    return defaultValue;
  }

  setItem<T>(key: string, value: T): void {
    const fullKey = this.getFullKey(key);
    const envelope: StorageEnvelope<T> = {
      version: STORAGE_VERSION,
      timestamp: Date.now(),
      data: value
    };

    const serialized = JSON.stringify(envelope);

    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(fullKey, serialized);
      }
    } catch (e) {
      // LocalStorage quota exceeded or storage disabled
      console.warn(`[NextSelf Storage] LocalStorage write failed for "${fullKey}". Using memory fallback.`, e);
    }

    this.memoryFallback.set(fullKey, serialized);
  }

  removeItem(key: string): void {
    const fullKey = this.getFullKey(key);

    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(fullKey);
      }
    } catch {
      // ignore
    }

    this.memoryFallback.delete(fullKey);
  }

  clearAppCache(): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const keysToRemove: string[] = [];
        for (let i = 0; i < window.localStorage.length; i++) {
          const k = window.localStorage.key(i);
          if (k && k.startsWith(STORAGE_PREFIX)) {
            keysToRemove.push(k);
          }
        }
        keysToRemove.forEach(k => window.localStorage.removeItem(k));
      }
    } catch {
      // ignore
    }
    this.memoryFallback.clear();
  }
}

export const storageService = new StorageService();
