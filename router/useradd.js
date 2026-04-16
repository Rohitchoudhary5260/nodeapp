const express = require("express")
const router = express.Router()

const UserModel = require("../schema/user")


router.post("/add", async (req, res) => {
    const usersave = new UserModel(req.body)
    const savedata = await usersave.save()

    if (savedata) {
        res.status(200).json({
            message: "user registered successfully....!"
        })
    } else {
        res.status(400).json({
            message: "something went wrong .."
        })
    }
})



router.get("/alluser", async (req, res) => {
    const alluser = await UserModel.find({})
    res.send(alluser)
})



router.get("/alluser/:id", async (req, res) => {
    const id = req.params.id
    const user = await UserModel.findById(id)
    res.send(user)
})



router.put("/update/:id", async (req, res) => {
    const id = req.params.id

    const updateuser = await UserModel.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
    )

    if (updateuser) {
        res.status(200).json({
            message: "user updated successfully",
            data: updateuser
        })
    } else {
        res.status(400).json({
            message: "something went wrong"
        })
    }
})



router.patch("/patch/:id", async (req, res) => {
    const id = req.params.id

    const updateuser = await UserModel.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
    )

    if (updateuser) {
        res.status(200).json({
            message: "user patched successfully",
            data: updateuser
        })
    } else {
        res.status(400).json({
            message: "something went wrong"
        })
    }
})


router.delete("/userdelete/:id", async (req, res) => {
    const id = req.params.id

    const userdelete = await UserModel.findByIdAndDelete(id)

    if (userdelete) {
        res.status(200).json({
            message: "user delete successfully ....!"
        })
    } else {
        res.status(400).json({
            message: "something went wrong ....!"
        })
    }
})

module.exports = router