import http from 'http';

const server = http.createServer((req, res) => {
    res.end("Hello from http server");
});

server.listen(3000, () => {"server is running on port 3000"})