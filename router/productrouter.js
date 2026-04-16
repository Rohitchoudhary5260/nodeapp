const express = require("express")
const router = express.Router()

const ProductModel = require("../schema/product")


router.post("/addproduct", async (req, res) => {

    const productsave = new ProductModel(req.body)
    const savedata = await productsave.save()

    if (savedata) {
        res.status(200).json({
            message: "Product added successfully!"
        })
    } else {
        res.status(400).json({
            message: "Something went wrong!"
        })
    }
})
router.patch("/editproduct/:id", async (req, res) => {
  try {
    const productId = req.params.id;

    const updatedProduct = await ProductModel.findByIdAndUpdate(
      productId,
      req.body,
      { new: true } 
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product updated successfully!",
      product: updatedProduct
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!", error });
  }
});



router.get("/allproduct", async (req, res) => {
  const { category, slug } = req.query;
  let products;

  if (slug) {
    products = await ProductModel.findOne({
      title: { $regex: new RegExp(`^${slug.replace(/-/g, " ")}$`, "i") }
    });
    if (!products) return res.status(404).json({ error: "Product not found" });
    return res.json(products);
  }

  if (category) {
    products = await ProductModel.find({ category });
  } else {
    products = await ProductModel.find({});
  }

  res.json(products);
});



router.delete("/deleteproduct/:id", async (req, res) => {

    const id = req.params.id
    const productdelete = await ProductModel.findByIdAndDelete(id)

    if (productdelete) {
        res.status(200).json({
            message: "Product deleted successfully!"
        })
    } else {
        res.status(400).json({
            message: "Something went wrong!"
        })
    }

})

module.exports = router