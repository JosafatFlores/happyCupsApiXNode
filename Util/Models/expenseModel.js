module.exports = (sequelize, type) => {
    return sequelize.define('expenses', {
        expenseID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        modelID: type.INTEGER,
        quantity: type.INTEGER,
        userID: type.STRING
    })
}