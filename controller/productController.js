const e = require("express");
const Product = require("../models/product");

// Prodict Creation

exports.createProduct = async (req, res) => {
  try {
    const { title, description, disPrice, orgPrice, imgUrl } = req.body;

    let newProduct = new Product({
      title,
      description,
      disPrice,
      orgPrice,
      imgUrl,
    });

    newProduct = await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status((500).json({ error: e.massage }));
  }
};

/*
object Destructuring: 
const product ={
title: = "product title"
discription:"product discription"
disPrice:100:
orgPrice:150:
ImgUrl: "imgUrl":
}
const title = product.description;
const description = product.disPrice;
const disPrice = product.orgPrice;
cost imgUrl = product.imgUrl

//shor form of this whole things

const {title, description, disPrice, orgPrice, imgUrl} = product.body;
*/


//product fatching

exports.products = async (req,res) => {
  try {
    const allproducts = await Product.find({});
    res.json(allproducts);
  } catch (error) {
    res.status(500).json({error: e.massage});
    
  }
}

//Fetching a particular product

exports.product = async (req, res) => {
  try {
    const singleproduct = await Product.findById(req.params.id);
    res.json(singleproduct);
    
  } catch (error) {
    res.status(500).json({error: e.massage});
    
  }
}

//product update

exports.updatedProduct = async (req, res) => {
  try {
    const { title, description, disPrice, orgPrice, imgUrl } = req.body;

    let updatedProduct = new Product({
      title,
      description,
      disPrice,
      orgPrice,
      imgUrl,
      _id: req.params.id,
    });

    updatedProduct = await Product.findByIdAndUpdate(req.params.id, updatedProduct);
    res.json({message: `Product with id ${req.params.id} has been updated successfully`})
    res.status(201).json(newProduct);
  } catch (error) {
    res.status((500).json({ error: e.massage }));
  }
};

//product Removal

exports.deleteProduct = async (req, res) => {
  try {
    const removedProduct = await Product.findByIdAndDelete(req.params.id);
    res.json({ message: `Product of id ${req.params.id} has removed.` });
  } catch (error) {
    res.status(500).json({error: e.message});
  }
};