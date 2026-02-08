import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';

import sessions from './api/sessions.js';
import progress from './api/progress.js';
import tricks from './api/tricks.js';
import equipment from './api/equipment.js';
import denver from './api/denver.js';
import exportimport from './api/exportimport.js';

const app = new Hono();

// API routes
app.route('/api/sessions', sessions);
app.route('/api/progress', progress);
app.route('/api/tricks', tricks);
app.route('/api/equipment', equipment);
app.route('/api/denver', denver);
app.route('/api/data', exportimport);

// Health check
app.get('/api/health', (c) => c.json({ status: 'ok', version: '1.0.0' }));

// Static files
app.use('/*', serveStatic({ root: './public' }));

const port = parseInt(process.env.PORT || '3000', 10);
console.log(`FPV Tracker listening on http://localhost:${port}`);
serve({ fetch: app.fetch, port });
