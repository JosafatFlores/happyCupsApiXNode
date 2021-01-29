module.exports = (sequelize, type) => {
    return sequelize.define('models', {
        modelID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        typeID: type.INTEGER,
        colorID: type.INTEGER,
        sizeID: type.INTEGER,
        materialID: type.INTEGER,
        capacityID: type.INTEGER,
        userID: type.STRING
    })
}