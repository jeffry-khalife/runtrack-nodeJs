const createServer = require('./server');
const handleRoutes = require('./routes');

const server = createServer(handleRoutes);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});