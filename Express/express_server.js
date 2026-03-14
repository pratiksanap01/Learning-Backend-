// First express server
// Create a server with 
// GET /
// GET /about
// GET /contact
// POST /user

import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from express server")
});


app.get("/about", (req, res) =>{
    res.send("You are on about page")
});


app.get("/contact", (req, res) => {
    app.send("Contact Page")
});


app.post("/user", (req, res) => {
    res.send("User created")
})


app.listen(3000,() => {
    console.log("server is running on port 3000");
})