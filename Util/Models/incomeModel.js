module.exports = (sequelize, type) => {
    return sequelize.define('incomes', {
        incomeID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        modelID: type.INTEGER,
        quantity: type.INTEGER,
        userID: type.STRING
    })
}