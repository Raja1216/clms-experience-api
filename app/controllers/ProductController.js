const mongoose = require("mongoose");
let Product = require("../models/Product");

// create new cause
module.exports = {
  read: (req, res, next) => {
    const pro = Product.find({});
    res.send(pro);
    //   .select("_id name ip")
    //   .then((products) => {
    //     console.log(products);
    //     return res.send(products);
    //     // return res.status(200).json({
    //     //   success: true,
    //     //   message: "A list of all products",
    //     //   products: products,
    //     // });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     return res.send(err);
    //     // res.status(500).json({
    //     //   success: false,
    //     //   message: "Server error. Please try again.",
    //     //   error: err.message,
    //     // });
    //   });
  },
  store(req, res, next) {
    console.log(req.body);
    const product = new Product({
      _id: mongoose.Types.ObjectId(),
      name: req.body.name,
      ip: req.body.ip,
    });
    return product
      .save()
      .then((newproduct) => {
        return res.status(201).json({
          success: true,
          message: "New product created successfully",
          product: newproduct,
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          message: "Server error. Please try again.",
          error: error.message,
        });
      });
  },
};

// function store() {
//
// }
