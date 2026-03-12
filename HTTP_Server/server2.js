import fs from 'fs';
import http from 'http';

const server = http.createServer((req, res) => {

    const log = `${Date.now()} : ${req.url} New Request Received\n`;

    fs.appendFile('log.txt', log, (err) => {
        if(err){
            console.log(err);
        }

        switch(req.url) {
            case "/":
                res.end("Home page");
                break;

            case "/about":
                res.end("You are on about page");
                break;

            default:
                res.end("Page not found");
        }
    });

});

server.listen(8000, () => {
    console.log("Server is running on port 8000");
});