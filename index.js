// eslint-disable-next-line @typescript-eslint/no-require-imports
const { startServer } = require('next/dist/server/lib/start-server');

if (process.env.BLOCKLET_MODE !== 'production') {
  throw new Error('This is a production-only script');
}

startServer({
  dir: process.env.BLOCKLET_APP_DIR || process.cwd(),
  isDev: false,
  hostname: '127.0.0.1',
  port: parseInt(process.env.BLOCKLET_PORT || '3000', 10),
  keepAliveTimeout: 65 * 1000,
});
