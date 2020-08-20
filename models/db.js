const Sequelize = require("sequelize");

const sequelize = new Sequelize('Banco', 'root', null, {
    host: 'localhost'
    , dialect: 'mariadb'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}