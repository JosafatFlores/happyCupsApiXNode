const { User } = require('../../Util/DataBase/dbConnection');
const bcrypt = require('bcryptjs')
const { responseHelper } = require("../../Util/Helpers/responseInterface")

const createUser = async (req) => {
    try {
        req.password = bcrypt.hashSync(req.password, 10)
        const userCreated = await User.create(req).catch((err) => {

            if (err.errors[0].message == "PRIMARY must be unique") {
                return responseHelper(4, "")
            }
        })

        if (userCreated.code == 4) {
            return userCreated
        } else {
            return responseHelper(1, "")
        }


    } catch (err) {
        return responseHelper(3, "")
    }
}


const login = async (req) => {
    console.log(req)
    try {
        const userFound = await User.findAll({
            where: {
                userID: req.userID
            }
        })
        if (userFound) {
            console.log(bcrypt.compareSync(req.password, userFound[0].dataValues.password))
            if (bcrypt.compareSync(req.password, userFound[0].dataValues.password)){
                return responseHelper(1,  userFound)
            }else{
                return responseHelper(2,'')
            }
            
        } else {
            return responseHelper(2,'')
        }

    } catch (err) {
        console.log(err)
        return responseHelper(3, "")

    }

}

module.exports = {
    login,
    createUser
}