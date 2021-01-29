const router = require("express").Router();
const typeObj = require("../../Controllers/typeController");
const {responseHelper} = require("../../../Util/Helpers/responseInterface")

router.get("/", async (req, res) => {
    try{
      const type = await typeObj.getAllTypes()
      res.status(200).json(type)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

router.post("/", async (req, res) => {
    
    try{
      const type = await typeObj.createType(req.body)
      res.status(200).json(type)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

  router.delete("/:typeID", async (req, res) => {
    try{
      const type = await typeObj.destroyType(req.params)
      res.status(200).json(type)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

module.exports = router