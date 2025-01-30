const express = require('express');
const app = express();
const port = 3000;

// middleware
app.use(express.json());

let books = [
    {
        id: '1',
        title: 'Book 1',
    },
    {
        id: '2',
        title: 'Book 2',
    },
];

// intro route
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to our bookstore api",
    });
});

// get all books
app.get('/get', (req, res) => {
    res.json(books);
});

// get a single book
app.get('/get/:id', (req, res) => {
    const book = books.find(item => item.id === req.params.id);
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({
            message: "Book is not found! Please try different Book ID."
        });
    }
});

// add new book
app.post('/add', (req, res) => {
    const newBook = {
        id: Math.floor(Math.random() * 1000).toString(),
        title: `Book ${Math.floor(Math.random() * 1000)}`,
    }
    books.push(newBook);
    // res.status(200).json(newBook);
    res.status(200).json({
        data: newBook,
        message: "New book is added successfully!",
    });
});

// update a book
app.put('/update/:id', (req, res) => {
    const findCurrentBook = books.find(bookItem => bookItem.id === req.params.id);
    if (findCurrentBook) {
        findCurrentBook.title = req.body.title || findCurrentBook.title;
        res.status(200).json({
            message: `Book with ID ${req.params.id} is updated successfully.`,
            data: findCurrentBook,
        });
    } else {
        res.status(404).json({
            message: `Book with ID ${req.params.id} is not found! Please try different Book ID.`,
        });
    }
});

// delete a book
app.delete('/delete/:id', (req, res) => {
    const findIndexOfCurrentBook = books.findIndex(item => item.id === req.params.id);
    if (findIndexOfCurrentBook !== -1) {
        const deletedBook = books.splice(findIndexOfCurrentBook, 1);
        res.status(200).json({
            message: `Book with ID ${req.params.id} is successfully deleted.`,
            data: deletedBook[0],
        });
    } else {
        res.status(404).json({
            message: `Book with ID ${req.params.id} is not found! Please try different Book ID.`,
        });
    }
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});