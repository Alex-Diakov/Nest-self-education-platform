import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json());

// API Routes
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    version: '1.0.0',
    platform: 'OmniEdu Enterprise Engine',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/stats', (_req: Request, res: Response) => {
  res.json({
    studentsEnrolled: 18450,
    testsCompleted: 42100,
    averagePassingScore: 78.4,
    activeSimulators: 18,
    facultyMembers: 24,
    accreditationStandard: 'ACM / IEEE Computer Science Curricula 2026',
  });
});

// Consultation Inquiries Endpoint
app.post('/api/inquiries', (req: Request, res: Response) => {
  const { fullName, email, offeringId, message } = req.body;

  if (!fullName || !email) {
    return res.status(400).json({ error: 'fullName and email are required fields' });
  }

  // Generate reference number
  const inquiryId = `INQ-${Date.now().toString(36).toUpperCase()}`;

  res.status(201).json({
    success: true,
    inquiryId,
    status: 'accepted',
    message: 'Заявка успешно принята приемной комиссией OmniEdu',
    receivedAt: new Date().toISOString(),
  });
});

async function startServer() {
  if (!isProd) {
    // Development mode with Vite dev middleware
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });

    app.use(vite.middlewares);
  } else {
    // Production mode: serve built assets from dist
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));

    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`[OmniEdu] Server running on port ${PORT} (mode: ${isProd ? 'production' : 'development'})`);
  });
}

startServer().catch(err => {
  console.error('[OmniEdu] Failed to start server:', err);
  process.exit(1);
});
