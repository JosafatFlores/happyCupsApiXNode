const router = require("express").Router();
const colorObj = require("../../Controllers/colorController");
const {responseHelper} = require("../../../Util/Helpers/responseInterface")

router.get("/", async (req, res) => {
    try{
      const color = await colorObj.getAllColors()
      res.status(200).json(color)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

router.post("/", async (req, res) => {
  console.log(req.body)
  try{
    const color = await colorObj.createColor(req.body)
    res.status(200).json(color)
  }catch(err){
    res.status(500).json(responseHelper(3,""))
  }
  })

  router.delete("/:colorID", async (req, res) => {
    try{
      const color = await colorObj.destroyColor(req.params)
      res.status(200).json(color)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

module.exports = router