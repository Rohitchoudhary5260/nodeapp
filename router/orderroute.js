const express = require("express")
const router = express.Router()

const OrderModel = require("../schema/order")



router.post("/addorder", async (req, res) => {

    const ordersave = new OrderModel(req.body)
    const savedata = await ordersave.save()

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



router.patch("/editorder/:id", async (req, res) => {

    const id = req.params.id

    const orderupdate = await OrderModel.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
    )

    if (orderupdate) {
        res.status(200).json({
            message: "Order updated successfully!"
        })
    } else {
        res.status(400).json({
            message: "Something went wrong!"
        })
    }

})



router.get("/allorder", async (req, res) => {

    const allorders = await OrderModel.find({})
    res.send(allorders)

})






router.delete("/deleteorder/:id", async (req, res) => {

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