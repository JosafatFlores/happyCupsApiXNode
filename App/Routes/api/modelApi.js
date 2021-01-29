const router = require("express").Router();
const modelObj = require("../../Controllers/modelController");
const {responseHelper} = require("../../../Util/Helpers/responseInterface")

router.get("/", async (req, res) => {
    try{
      const model = await modelObj.getAllModels()
      res.status(200).json(model)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

router.post("/", async (req, res) => {
    try{
      const model = await modelObj.createModel(req.body)
      res.status(200).json(model)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

  router.delete("/:modelID", async (req, res) => {
    try{
      const model = await modelObj.destroyModel(req.params)
      res.status(200).json(model)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

module.exports = router