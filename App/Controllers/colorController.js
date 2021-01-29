const { Color } = require('../../Util/DataBase/dbConnection');
const { responseHelper } = require("../../Util/Helpers/responseInterface")

const getAllColors = async () => {
    try {
        const capacity = await Color.findAll()
        return responseHelper(1, capacity)
    } catch (err) {
        return responseHelper(3, "")
    }
}

const createColor = async (req) => {
    req.sizeID = 0
    try {
        await Color.create(req)
        return responseHelper(1, "")

    } catch (err) {
        console.log(err)
        return responseHelper(3, "")
    }
}

const destroyColor = async (req) => {
    try {

        await Color.destroy({
            where: {
                colorID: req.colorID
            }
        })
        return responseHelper(1, "")
    } catch (err) {
        return responseHelper(3, "")
    }
}



module.exports = {
    getAllColors, 
    createColor,
    destroyColor
}