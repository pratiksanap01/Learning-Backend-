// First express server

import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Hello from express server")
});


app.get('/about', (req, res) =>{
    res.send("You are on about page")
});


app.listen(3000,() => {
    console.log("server is running on port 3000");
})