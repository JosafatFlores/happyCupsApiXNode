module.exports = (sequelize, type) => {
    return sequelize.define('colors', {
        colorID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: type.STRING,
    })
}