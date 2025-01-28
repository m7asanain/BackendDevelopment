const express = require("express");
const app = express();
const port = 3000;

// define middleware
const requestTimesTampLogger = (req, res, next) => {
    const timeTemp = new Date().toISOString();
    console.log(`${timeTemp} from ${req.method} to ${req.url}`);
    next();
};

app.use(requestTimesTampLogger);

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/about', (req, res) => {
    res.send("About Page");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});