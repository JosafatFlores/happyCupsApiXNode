const dotenv = require("dotenv").config();
const Sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');


const userModel = require('../Models/usersModel')
const colorModel = require('../Models/colorModel')
const materialModel = require('../Models/materialModel')
const capacityModel = require('../Models/capacityModel')
const sizeModel = require('../Models/sizeModel')
const typeModel = require('../Models/typeModel')
const modelModel = require('../Models/modelModel')
const incomeModel = require('../Models/incomeModel')
const stockModel = require('../Models/stockModel')
const expenseModel = require('../Models/expenseModel')
const offerModel = require('../Models/offerModel')

const sequelize = new Sequelize(
    process.env.database,
    process.env.user,
    process.env.password, {
    host: process.env.host,
    port: process.env.portDB,
    dialect: 'mysql'
});

const User = userModel(sequelize, Sequelize)
const Color = colorModel(sequelize, Sequelize)
const Material = materialModel(sequelize, Sequelize)
const Capacity = capacityModel(sequelize, Sequelize)
const Size = sizeModel(sequelize, Sequelize)
const Type = typeModel(sequelize, Sequelize)
const Model = modelModel(sequelize, Sequelize)
const Income = incomeModel(sequelize, Sequelize)
const Stock = stockModel(sequelize, Sequelize)
const Expense = expenseModel(sequelize, Sequelize)
const Offer = offerModel(sequelize, Sequelize)

sequelize.sync({force: false}).then(() => {
    console.log('database syncronized')
})


const query = async function(querySQL) {
    console.log(querySQL)
    return await sequelize.query(querySQL, { type: QueryTypes.SELECT });
  }
   

module.exports = {
    User,
    Color,
    Material,
    Capacity,
    Size,
    Type,
    Model,
    Income,
    Stock,
    Expense,
    Offer,
    query
}