const { Income, query } = require('../../Util/DataBase/dbConnection');
const { responseHelper } = require("../../Util/Helpers/responseInterface")

const getAllIncomes = async () => {
    try {
        const income =  await query("select *  from vincomes")
        return responseHelper(1, income)
    } catch (err) {
        return responseHelper(3, "")
    }
}

const createIncome = async (req) => {
    req.incomeID = 0
    try {
        await query("CALL spstock('" + req.modelID + "', '" + req.quantity + "', '1');") 
        await Income.create(req)
        return responseHelper(1, "")

    } catch (err) {
        console.log(err)
        return responseHelper(3, "")
    }
}

const destroyIncome = async (req) => {
    try {

        await Income.destroy({
            where: {
                incomeID: req.incomeID
            }
        })
        return responseHelper(1, "")
    } catch (err) {
        return responseHelper(3, "")
    }
}



module.exports = {
    getAllIncomes, 
    createIncome,
    destroyIncome
}