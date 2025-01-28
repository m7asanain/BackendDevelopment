const express = require("express");
const app = express();
const port = 3000;

// root route
app.get('/', (req, res) => {
    res.send("Welcome to the Home Page");
});

// get all producs
app.get('/products', (req, res) => {
    const products = [
        {
            id: 1,
            label: 'Product 1',
        },
        {
            id: 2,
            label: 'Product 2',
        },
        {
            id: 3,
            label: 'Product 3',
        },
    ];
    res.json(products);
});

// get a single product (dynamiclly)
app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const products = [
        {
            id: 1,
            label: 'Product 1',
        },
        {
            id: 2,
            label: 'Product 2',
        },
        {
            id: 3,
            label: 'Product 3',
        },
    ];
    const getSingleProduct = products.find(product => product.id === productId);

    if (getSingleProduct) {
        res.json(getSingleProduct);
    } else {
        res.status(404).send("Product is not found, Try different product");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});