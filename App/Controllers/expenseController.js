const { Expense, query} = require('../../Util/DataBase/dbConnection');
const { responseHelper } = require("../../Util/Helpers/responseInterface")

const getAllExpenses = async () => {
    try {
        const expense = await query("select * from vexpense;")
        return responseHelper(1, expense)
    } catch (err) {
        return responseHelper(3, "")
    }
}

const createExpense = async (req) => {
    req.sizeID = 0
    try {
        await query("CALL spstock('" + req.modelID + "', '" + req.quantity + "', '2');") 
        await Expense.create(req)
        return responseHelper(1, "")

    } catch (err) {
        console.log(err)
        return responseHelper(3, "")
    }
}

const destroyExpense = async (req) => {
    try {

        await Expense.destroy({
            where: {
                ExpenseID: req.ExpenseID
            }
        })
        return responseHelper(1, "")
    } catch (err) {
        return responseHelper(3, "")
    }
}



module.exports = {
    getAllExpenses, 
    createExpense,
    destroyExpense
}