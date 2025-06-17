const http = require('http');

function createServer(requestListener) {
    const server = http.createServer(requestListener);
    return server;
}

module.exports = createServer;