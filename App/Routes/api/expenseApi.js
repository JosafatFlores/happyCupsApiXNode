const router = require("express").Router();
const expenseObj = require("../../Controllers/expenseController");
const {responseHelper} = require("../../../Util/Helpers/responseInterface")
router.get("/", async (req, res) => {
    try{
      const expense = await expenseObj.getAllExpenses()
      res.status(200).json(expense)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

router.post("/", async (req, res) => {
    try{
      const expense = await expenseObj.createExpense(req.body)
      res.status(200).json(expense)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

  router.delete("/:expenseID", async (req, res) => {
    try{
      const expense = await expenseObj.destroyExpense(req.params)
      res.status(200).json(expense)
    }catch(err){
      res.status(500).json(responseHelper(3,""))
    }
  })

module.exports = router