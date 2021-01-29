const router = require("express").Router();
const offerObj = require("../../Controllers/offerController");
const {responseHelper} = require("../../../Util/Helpers/responseInterface")

router.get("/", async (req, res) => {
    try{
      const offer = await offerObj.getAllOffers()
      res.status(200).json(offer)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

router.post("/", async (req, res) => {
    try{
      const offer = await offerObj.createOffer(req.body)
      res.status(200).json(offer)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

  router.delete("/:offerID", async (req, res) => {
    try{
      const offer = await offerObj.destroyOffer(req.params)
      res.status(200).json(offer)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

module.exports = router