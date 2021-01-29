const { Model, query } = require('../../Util/DataBase/dbConnection');
const { responseHelper } = require("../../Util/Helpers/responseInterface")

const getAllModels = async () => {
    try {
        const model = await query("select *  from vmodels")
        return responseHelper(1, model)
    } catch (err) {
        return responseHelper(3, "")
    }
}

const createModel = async (req) => {
    req.modelID = 0
    try {

        await Model.create(req)
        return responseHelper(1, "")

    } catch (err) {
        console.log(err)
        return responseHelper(3, "")
    }
}

const destroyModel = async (req) => {
    try {

        await Model.destroy({
            where: {
                modelID: req.modelID
            }
        })
        return responseHelper(1, "")
    } catch (err) {
        return responseHelper(3, "")
    }
}


module.exports = {
    getAllModels,
    createModel,
    destroyModel
}