module.exports = (sequelize, type) => {
    return sequelize.define('materials', {
        materialID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: type.STRING,
    })
}