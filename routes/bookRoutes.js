// Dependencies
const express = require("express")
const router = express.Router()
const Book = require("./../models/Book.js")

// POST / - Creates a new book using the data in req.body
router.post("/books", async (req, res) => {

    try {
        // Destructuring only the fields allowed from req.body providing more safety
        const { title, author, isbn, publishedDate, inStock } = req.body
        const savedBook = await Book.create({ title, author, isbn, publishedDate, inStock })

        res.status(201).json({ success: true, data: savedBook })
    } catch (error) {
        res.status(400).json({ success: false, error: error.message })
    }
})

// GET / - Retrieves all books from the database.
router.get("/books", async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(400).json({ success: false, error: error.message })
    }
})

// GET /:id - Retrieves a single book by its _id
router.get("/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /:id - Updates a book by its _id using the data in req.body
router.put('/books/:id', async (req, res) => {
  try {
    // {new: true} returns the updated document instead of the old one
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /:id - Deletes a book by its _id.
router.delete('/books/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router