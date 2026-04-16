const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({

    userId: String,
    username: String,
    email: String,
    address: String,
    mobile: String,
    zip: String,
    city: String,

    totalPrice: String,

    product: Array,

    ordersDate: String,

    status: {
        type: String,
        default: "confirmed"
        
    }

})

const Order = mongoose.model("Orderdata", OrderSchema)

module.exports = Order