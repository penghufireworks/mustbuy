import { createServer } from 'vite'

console.log('Starting Vite server...');

async function startServer() {
  try {
    const server = await createServer({
      configFile: './vite.config.ts',
      server: {
        port: 5173,
        host: '0.0.0.0'
      }
    })
    await server.listen()

    server.printUrls()
    console.log('Server running successfully!');
    
    // Keep alive forever
    setInterval(() => {
      // console.log('Heartbeat');
    }, 60000);
  } catch (e) {
    console.error('Error starting server:', e);
    process.exit(1);
  }
}

startServer();
