
module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        userID: {
            type: type.STRING,
            primaryKey: true
        },
        name: type.STRING,
        password: type.STRING
    })
}