const { Material } = require('../../Util/DataBase/dbConnection');
const { responseHelper } = require("../../Util/Helpers/responseInterface")

const getAllMaterials = async () => {
    try {
        const material = await Material.findAll()
        return responseHelper(1, material)
    } catch (err) {
        return responseHelper(3, "")
    }
}

const createMaterial = async (req) => {
    req.materialID = 0
    try {

        await Material.create(req)
        return responseHelper(1, "")

    } catch (err) {
        console.log(err)
        return responseHelper(3, "")
    }
}

const destroyMaterial = async (req) => {
    try {

        await Material.destroy({
            where: {
                materialID: req.materialID
            }
        })
        return responseHelper(1, "")
    } catch (err) {
        return responseHelper(3, "")
    }
}



module.exports = {
    getAllMaterials, 
    createMaterial,
    destroyMaterial
}