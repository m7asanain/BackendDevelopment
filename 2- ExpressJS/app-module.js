const express = require("express");
const app = express();
const port = 3000;

// app level settings
app.set('view engin', 'ejs')

// routing
app.get('/', (req, res) => {
    res.send("Home Page");
});

app.post('/api/data', (req, res) => {
    res.json({
        message : 'Data recived',
        data : req.body
    })
});

app.use((error, req, res, next) => {
    console.log(error.stack);
    res.status(500).send('something went wrong');
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});