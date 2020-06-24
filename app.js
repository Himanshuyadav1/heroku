const http = require('http');
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html' });
    res.end('<h1>Heroku Deployment</h1>');
});

server.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
