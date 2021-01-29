
module.exports = (sequelize, type) => {
    return sequelize.define('sizes', {
        sizeID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: type.STRING,
    })
}