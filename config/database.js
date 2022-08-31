const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const databse = process.env.DB_NAME;
//Import the mongoose module
const mongoose = require("mongoose");

//Set up default mongoose connection
const mongoDB = `mongodb://${host}:${port}/${databse}`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
let db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;
