const router = require("express").Router();
const userObj = require("../../Controllers/usersController");
const {responseHelper} = require("../../../Util/Helpers/responseInterface")

router.post("/login", async (req,res) => {
  try{
    const user = await userObj.login(req.body)
    res.status(200).json(user)
  }catch(err){
    res.status(500).json(responseHelper(3,""))
  }
})

router.post("/", async (req, res) => {
  try{
    const user = await userObj.createUser(req.body)
    res.status(200).json(user)
  }catch(err){
    res.status(500).json(responseHelper(3,""))
  }
})

module.exports = router;