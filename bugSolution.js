const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Handle errors
server.on('error', (err) => {
  console.error('Server error:', err);
  // Handle the error appropriately, e.g., exit the process or try a different port
  process.exit(1);
});

// Handle listening successfully
server.on('listening', () => {
  console.log(`Server is running on port ${server.address().port}`);
});

server.listen(8080);
