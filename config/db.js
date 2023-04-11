const mongoose = require('mongoose');
require("dotenv").config()
const connection =  mongoose.connect(process.env.mongourl || "mongodb+srv://dantehaxor:dantehaxor@cluster0.6eerxwr.mongodb.net/?retryWrites=true&w=majority")
module.exports = connection