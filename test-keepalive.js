
console.log('Starting keepalive test...');
setInterval(() => {
  console.log('Still alive at ' + new Date().toISOString());
}, 1000);

// Keep alive forever
await new Promise(() => {});
