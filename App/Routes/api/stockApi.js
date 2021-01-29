const router = require("express").Router();
const stockObj = require("../../Controllers/stockController");
const {responseHelper} = require("../../../Util/Helpers/responseInterface")

router.get("/", async (req, res) => {
    try{
      const stock = await stockObj.getAllStocks()
      res.status(200).json(stock)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

router.post("/", async (req, res) => {
    try{
      const stock = await stockObj.createStock(req.body)
      res.status(200).json(stock)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

  router.delete("/:stockID", async (req, res) => {
    try{
      const stock = await stockObj.destroyStock(req.params)
      res.status(200).json(stock)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

module.exports = router