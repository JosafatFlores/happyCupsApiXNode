const { Offer } = require('../../Util/DataBase/dbConnection');
const { responseHelper } = require("../../Util/Helpers/responseInterface")


const getAllOffers = async () => {
    try {
        const offers = await Offer.findAll()
        return responseHelper(1, offers)
    } catch (err) {
        return responseHelper(3, "")
    }
}

const createOffer = async (req) => {
    console.log('llegue')
    req.offerID = 0
    try {

        await Offer.create(req)
        return responseHelper(1, "")

    } catch (err) {
        console.log(err)
        return responseHelper(3, "")
    }
}

const destroyOffer = async (req) => {
    try {

        await Offer.destroy({
            where: {
                offerID: req.offerID
            }
        })
        return responseHelper(1, "")
    } catch (err) {
        return responseHelper(3, "")
    }
}



module.exports = {
    createOffer, 
    destroyOffer,
    getAllOffers
}