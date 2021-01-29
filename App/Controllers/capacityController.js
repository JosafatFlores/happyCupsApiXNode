const { Capacity } = require('../../Util/DataBase/dbConnection');
const { responseHelper } = require("../../Util/Helpers/responseInterface")


const getAllCapacities = async () => {
    try {
        const capacity = await Capacity.findAll()
        return responseHelper(1, capacity)
    } catch (err) {
        return responseHelper(3, "")
    }
}

const createCapacity = async (req) => {
    req.sizeID = 0
    try {

        await Capacity.create(req)
        return responseHelper(1, "")

    } catch (err) {
        console.log(err)
        return responseHelper(3, "")
    }
}

const destroyCapacity = async (req) => {
    try {

        await Capacity.destroy({
            where: {
                capacityID: req.capacityID
            }
        })
        return responseHelper(1, "")
    } catch (err) {
        return responseHelper(3, "")
    }
}



module.exports = {
    getAllCapacities, 
    createCapacity,
    destroyCapacity
}