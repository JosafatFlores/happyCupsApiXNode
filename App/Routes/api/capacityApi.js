const router = require("express").Router();
const capacityObj = require("../../Controllers/capacityController");
const {responseHelper} = require("../../../Util/Helpers/responseInterface")

router.get("/", async (req, res) => {
    try{
      const capacity = await capacityObj.getAllCapacities()
      res.status(200).json(capacity)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

router.post("/", async (req, res) => {
    try{
      const capacity = await capacityObj.createCapacity(req.body)
      res.status(200).json(capacity)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

  router.delete("/:capacityID", async (req, res) => {
    try{
      const capacity = await capacityObj.destroyCapacity(req.params)
      res.status(200).json(capacity)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

module.exports = router