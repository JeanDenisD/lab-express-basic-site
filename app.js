const express = require('express');
const app = express();

app.use(express.static('public'));

/*
app.get(path, code)
*/

app.get("/", (req, res, next) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get("/about",(req, res, next) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get("/career",(req, res, next) => {
    res.sendFile(__dirname + '/views/career.html');
});

app.get("/gallery",(req, res, next) => {
    res.sendFile(__dirname + '/views/gallery.html');
});



app.listen(3000, () => {
    console.log("Server is listening to requests");
})