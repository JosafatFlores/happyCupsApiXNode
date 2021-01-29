const router = require("express").Router();
const materialObj = require("../../Controllers/materialController");
const {responseHelper} = require("../../../Util/Helpers/responseInterface")
router.get("/", async (req, res) => {
    try{
      const material = await materialObj.getAllMaterials()
      res.status(200).json(material)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

router.post("/", async (req, res) => {
    try{
      const material = await materialObj.createMaterial(req.body)
      res.status(200).json(material)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

  router.delete("/:materialID", async (req, res) => {
    try{
      const material = await materialObj.destroyMaterial(req.params)
      res.status(200).json(material)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

module.exports = router