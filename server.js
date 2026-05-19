// Dependencies

const express = require("express")
const app = express()
require("dotenv").config()

const {connectDB} = require("./db/connection")

// Middleware
app.use(express.urlencoded({extended: true}))


// Routes

app.get("/", (req, res) => {
    res.send("Test Route")

})

connectDB()




// Port
const PORT = process.env.PORT
app.listen(PORT, () => {console.log(`Server listening on Port: ${PORT}`)})