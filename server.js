// Dependencies
const express = require("express")
const app = express()
require("dotenv").config()

const { connectDB } = require("./db/connection.js")

const bookRouter = require("./routes/bookRoutes.js")

connectDB()

// Middleware
app.use(express.urlencoded({extended: true}))
// Middleware to parse JSON bodies
app.use(express.json())


// Routes

// app.get("/", (req, res) => {
//     res.send("Test Route")

// })



// Mount the router
app.use("/", bookRouter);



//app.use("/", bookRoutes)







// Port
const PORT = process.env.PORT
app.listen(PORT, () => {console.log(`Server listening on Port: ${PORT}`)})