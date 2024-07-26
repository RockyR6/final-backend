const express = require("express");
const mongoose = require("mongoose");
const port = 3000;
const cors = require("cors");
require("dotenv").config();

const productRouter = require("./routes/productRoutes");

const app = express();

const mongodbURL = process.env.MONGODB_URL;
mongoose.connect(mongodbURL);


const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB Connetion Error => "));

db.once("open", () => {
    console.log("Connected to database sucessfully.");
})

//Middlewares
app.use(cors({ origin:"*" }));
app.use(express.json());
app.use(productRouter);

// localhost:3000 is the Root Path and is represented by '/'
app.get("/", (req, res) => {
    res.send("Hellow there")
});

app.listen(port, () => {
    console.log(`Server started at port ${port} successfully`);

})