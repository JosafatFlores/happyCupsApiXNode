const router = require("express").Router();
const incomeObj = require("../../Controllers/incomeController");
const {responseHelper} = require("../../../Util/Helpers/responseInterface")
router.get("/", async (req, res) => {
    try{
      const income = await incomeObj.getAllIncomes()
      res.status(200).json(income)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

router.post("/", async (req, res) => {
    try{
      const income = await incomeObj.createIncome(req.body)
      res.status(200).json(income)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

  router.delete("/:incomeID", async (req, res) => {
    try{
      const income = await incomeObj.destroyIncome(req.params)
      res.status(200).json(income)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

module.exports = router