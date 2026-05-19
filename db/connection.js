// Dependencies
const mongoose = require("mongoose")
require("dotenv").config()

const uri = process.env.DATABASE_URI

// Connect to MongoDB and handle the promise
// mongoose.connect(uri)
//     .then(() => { console.log("Successfully connected to MongoDB!") })
//     .catch(err => console.error("Connection error", err))

const connectDB = async () => {
    try {
        await mongoose.connect(uri)
        console.log("Successfully connected to MongoDB!") 
    } catch (error) {
        console.error("Connection error", err)
    }
}

module.exports = { connectDB }



