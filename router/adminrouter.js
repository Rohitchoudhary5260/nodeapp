const express = require("express")
const router = express.Router()

const AdminModel = require("../schema/admin")



router.post("/addorder", async (req, res) => {

    const ordersave = new AdminModel(req.body)
    const savedata = await adminsave.save()

    if (savedata) {
        res.status(200).json({
            message: "Order placed successfully!"
        })
    } else {
        res.status(400).json({
            message: "Something went wrong!"
        })
    }

})







router.get("/alladmin", async (req, res) => {
  try {
    
    const allUsers = await AdminModel.find({});
    res.send(allUsers);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Server Error" });
  }
});





router.delete("/deleteadmin/:id", async (req, res) => {

    const id = req.params.id

    const orderdelete = await OrderModel.findByIdAndDelete(id)

    if (orderdelete) {
        res.status(200).json({
            message: "Order deleted successfully!"
        })
    } else {
        res.status(400).json({
            message: "Something went wrong!"
        })
    }

})

module.exports = router