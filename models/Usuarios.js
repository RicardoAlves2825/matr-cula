const db = require("./db");

const Usuario = db.sequelize.define("usuarios", {
  ID: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: db.Sequelize.STRING,
  },
  email: {
    type: db.Sequelize.STRING,
  },
  idade: {
    type: db.Sequelize.INTEGER,
  },
  usuario: {
    type: db.Sequelize.STRING,
  },
});
//Usuario.sync({ Force: true });
module.exports = Usuario;


