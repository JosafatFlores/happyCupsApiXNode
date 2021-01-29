const router = require("express").Router();
const sizeObj = require("../../Controllers/sizeController");
const {responseHelper} = require("../../../Util/Helpers/responseInterface")

router.get("/", async (req, res) => {
    try{
      const size = await sizeObj.getAllSizes()
      res.status(200).json(size)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

router.post("/", async (req, res) => {
    try{
      const size = await sizeObj.createSize(req.body)
      res.status(200).json(size)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

  router.delete("/:sizeID", async (req, res) => {
    try{
      const size = await sizeObj.destroySize(req.params)
      res.status(200).json(size)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

module.exports = router