
module.exports = (sequelize, type) => {
    return sequelize.define('types', {
        typeID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: type.STRING,
    })
}