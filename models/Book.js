const mongoose = require("mongoose")

// Define Book schema
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, unique: true },
    publishedDate: { type: Date, default: Date.now },
    inStock: { type: Boolean, default: true }
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book