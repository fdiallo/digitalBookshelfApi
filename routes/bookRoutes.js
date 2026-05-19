// Dependencies
const express = require("express")
const router = express.Router()
const Book = require("./../models/Book")

// POST / - Creates a new book using the data in req.body
router.post("/books", async (req, res) => {

    try {
        // Destructuring only the fields allowed from req.body providing more safety
        const {title, author, isbn, publishedDate, inStock} = req.body
        
        const savedBook = await Book.create({title, author, isbn, publishedDate, inStock})
        res.status(201).json({ success: true, data: savedBook})
    } catch (error) {
        res.status(400).json({success: false, error: error.message})
    }
})

// GET / - Retrieves all books from the database.
router.get("/")


// GET /:id - Retrieves a single book by its _id
router.get("/:id")


// PUT /:id - Updates a book by its _id using the data in req.body
router.put("/:id")



// DELETE /:id - Deletes a book by its _id.
router.delete("/:id")


module.exports = {router}