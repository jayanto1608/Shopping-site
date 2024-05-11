
const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/product.routers");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "*",
})
);

const mongodbURL = "mongodb+srv://jayantakarmakar:karmakarr@cluster0.s2jvvyk.mongodb.net/e_commerce?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongodbURL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));


db.once("open", () => {
    console.log("connected to database successfully!");
});

app.use(express.json());
app.use(productRouter);

/*app.get("/", function (req, res) {
    res.send('Hello world');
  });*/
  
  app.listen(4000, '0.0.0.0' , () => {
    console.log("sever started at port 4000");
  });
  