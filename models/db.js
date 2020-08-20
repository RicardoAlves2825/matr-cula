const Sequelize = require("sequelize");

const sequelize = new Sequelize('banco', 'root', 'ricardo', {
    host: 'localhost'
    , dialect: 'mariadb'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
sequelize.authenticate().then(function () {
    console.log("Conectado com sucesso!");
}).catch(function (erro) {
    console.log("Falha ao se conectar: " + erro);
});