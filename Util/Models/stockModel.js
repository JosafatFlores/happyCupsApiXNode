
module.exports = (sequelize, type) => {
    return sequelize.define('stock', {
        stockID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        modelID: type.INTEGER,
        quantity: type.INTEGER
    })
    
}