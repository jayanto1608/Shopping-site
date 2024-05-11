const ProductModel = require("../models/product.model");

exports.createProduct = async (req, res)=> {                            // async function to return promise 
    //const title = req.body.title;
     // const description = req.body.description;
     try {
        const { title, description, price, imgUrl} = req.body;       // shortcut object disstructuring

         let newProduct = new ProductModel({
           title, 
           description, 
           price, 
           imgUrl,
        });

     newProduct =  await newProduct.save();      // await function used to wait  
      
     res.status(201).json(newProduct);
     } catch(err) {
        console.log(err);
        res.status(500).json({message: err.message});
      }

};

exports.allProducts = async (req, res) => {
    try{
        const products = await ProductModel.find({});

        res.status(200).json(products);
    } catch(err) {
      res.status(500).json({message: err.message});
    }

};

exports.updateProduct = async (req, res) => {
    try{
      const { title, description, price, imgUrl} = req.body;       // shortcut object disstructuring

       let updatedProduct = new ProductModel({
        title, 
        description, 
        price, 
        imgUrl,
        _id: req.params.id,
       });

        updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, updatedProduct);

        res.status(200).json(updatedProduct);
  } catch(err) {
    res.status(500).json({ message: err.message});
  }
};


exports.deleteProduct = async (req, res) => {
  try{
      await ProductModel.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Product deleted sucessfully!"});
  } catch(err) {
     res.status(500).json({message: err.message});
  }
};

exports.singleProduct = async (req, res) => {
   try{
     const product = await ProductModel.findById(req.params.id);

     res.status(200).json(product);
   } catch(err) {
     res.status(500).json({message: err.message});
   }
};

/*const req = {
    body :{
      title : " product title" ,
      description : "product description" ,
      price : 120,

    },
};*/