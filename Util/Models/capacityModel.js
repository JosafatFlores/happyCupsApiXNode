module.exports = (sequelize, type) => {
    return sequelize.define('capacities', {
        capacityID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: type.STRING,
    })
}