const express = require("express");
const router = express.Router();

const DataModel = require("../schema/home");

router.post("/adddata", async (req, res) => {
  const datasave = new DataModel(req.body);
  const savedata = await datasave.save();

  if (savedata) {
    res.status(200).json({
      message: "Data added successfully!",
      data: savedata
    });
  } else {
    res.status(400).json({
      message: "Something went wrong!"
    });
  }
});

router.patch("/editdata/:id", async (req, res) => {
  const id = req.params.id;

  const updatedData = await DataModel.findByIdAndUpdate(
    id,
    req.body,
    { new: true }
  );

  if (updatedData) {
    res.status(200).json({
      message: "Data updated successfully!",
      data: updatedData
    });
  } else {
    res.status(404).json({
      message: "Data not found"
    });
  }
});

router.get("/alldata", async (req, res) => {
  let data = await DataModel.find({});

  if (data) {
    res.json(data);
  } else {
    res.status(400).json({
      message: "Something went wrong!"
    });
  }
});

  

router.delete("/deletedata/:id", async (req, res) => {
  const id = req.params.id;

  const datadelete = await DataModel.findByIdAndDelete(id);

  if (datadelete) {
    res.status(200).json({
      message: "Data deleted successfully!"
    });
  } else {
    res.status(400).json({
      message: "Something went wrong!"
    });
  }
});

module.exports = router;