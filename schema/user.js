const mongoose = require("mongoose")

const Usermodel = new mongoose.Schema({
   username: String,
   phone: String,
   dob: String,
   email: String,
   password: String,
   address: String,
   zip: String,
   city: String,

})

const User = mongoose.model("Userdata", Usermodel)

module.exports = User