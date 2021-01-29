const { Size } = require('../../Util/DataBase/dbConnection');
const { responseHelper } = require("../../Util/Helpers/responseInterface")


const getAllSizes = async () => {
    try {
        const sizes = await Size.findAll()
        return responseHelper(1, sizes)
    } catch (err) {
        return responseHelper(3, "")
    }
}

const createSize = async (req) => {
    console.log('llegue')
    req.sizeID = 0
    try {

        await Size.create(req)
        return responseHelper(1, "")

    } catch (err) {
        console.log(err)
        return responseHelper(3, "")
    }
}

const destroySize = async (req) => {
    try {

        await Size.destroy({
            where: {
                sizeID: req.sizeID
            }
        })
        return responseHelper(1, "")
    } catch (err) {
        return responseHelper(3, "")
    }
}



module.exports = {
    createSize, 
    destroySize,
    getAllSizes
}