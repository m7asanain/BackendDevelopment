const express = require("express");
const app = express();
const port = 3000;

// define middleware
const myFirstMiddleware = (req, res, next) => {
    console.log("This first middleware will run on every request.");
    next();
};

app.use(myFirstMiddleware);

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/about', (req, res) => {
    res.send("About Page");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});