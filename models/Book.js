const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, unique: true },
    publishedDate: { type: Date, default: Date.now },
    inStock: { type: Boolean, default: true }
})


//const Book = mongoose.Model("Book", bookSchema)
const Book = mongoose.model("Book", bookSchema)

module.exports = Book