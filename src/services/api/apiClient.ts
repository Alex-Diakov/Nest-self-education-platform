/**
 * API client layer with error resilience and type safety
 */

export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = '/api') {
    this.baseUrl = baseUrl;
  }

  async get<T>(endpoint: string): Promise<T> {
    const res = await fetch(`${this.baseUrl}${endpoint}`, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`API Error ${res.status}: ${res.statusText}`);
    }

    return res.json() as Promise<T>;
  }

  async post<T, B = unknown>(endpoint: string, body: B): Promise<T> {
    const res = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`API Error ${res.status}: ${res.statusText}`);
    }

    return res.json() as Promise<T>;
  }
}

export const apiClient = new ApiClient();
