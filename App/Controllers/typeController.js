const { Type } = require('../../Util/DataBase/dbConnection');
const { responseHelper } = require("../../Util/Helpers/responseInterface")

const getAllTypes = async () => {
    try {
        const type = await Type.findAll()
        return responseHelper(1, type)
    } catch (err) {
        return responseHelper(3, "")
    }
}

const createType = async (req) => {
    req.typeID = 0
    try {

        await Type.create(req)
        return responseHelper(1, "")

    } catch (err) {
        console.log(err)
        return responseHelper(3, "")
    }
}

const destroyType = async (req) => {
    try {

        await Type.destroy({
            where: {
                typeID: req.typeID
            }
        })
        return responseHelper(1, "")
    } catch (err) {
        return responseHelper(3, "")
    }
}


module.exports = {
    getAllTypes,
    createType,
    destroyType
}