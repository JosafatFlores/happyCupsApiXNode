
module.exports = (sequelize, type) => {
    return sequelize.define('offers', {
        offerID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        modelID: type.INTEGER,
        minimum: type.INTEGER,
        free: type.INTEGER
    })
}