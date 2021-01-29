const { Stock, query } = require('../../Util/DataBase/dbConnection');
const { responseHelper } = require("../../Util/Helpers/responseInterface")


const getAllStocks = async () => {
    try {
        const stocks =  await query("select * from vstock")
        return responseHelper(1, stocks)
    } catch (err) {
        return responseHelper(3, "")
    }
}

const createStock = async (req) => {
    console.log('llegue')
    req.stockID = 0
    try {

        await Stock.create(req)
        return responseHelper(1, "")

    } catch (err) {
        console.log(err)
        return responseHelper(3, "")
    }
}

const destroyStock = async (req) => {
    try {

        await Stock.destroy({
            where: {
                stockID: req.stockID
            }
        })
        return responseHelper(1, "")
    } catch (err) {
        return responseHelper(3, "")
    }
}



module.exports = {
    createStock, 
    destroyStock,
    getAllStocks
}