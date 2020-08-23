const Sequelize = require("sequelize");
const cli = require("cli-color");

const sequelize = new Sequelize("banco", "root", "ricardo", {
  host: "localhost",
  dialect: "mariadb",
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
sequelize
  .authenticate()
  .then(function () {
    console.log(cli.green("Conectado com sucesso!"));
  })
  .catch(function (erro) {
    console.log(cli.red("Falha ao se conectar: ") + erro);
  });
