//Require Mongoose
const mongoose = require("mongoose");

//Define a schema
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
