const db = require("./db");
const bcrypt = require("bcryptjs")

const Usuario = db.sequelize.define("usuarios", {
  ID: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
      type: db.Sequelize.STRING,
      require:true
  },
  email: {
      type: db.Sequelize.STRING,
      require:true
  },
  idade: {
      type: db.Sequelize.INTEGER,
      require:true
  },
  usuario: {
      type: db.Sequelize.STRING,
      require:true
    },
  senha: {
        type: db.Sequelize.STRING,
        require:true
      },
  admin: {
        type: db.Sequelize.INTEGER,
        default:0
    },
    img: {
      type:db.Sequelize.BLOB
  }
});
Usuario.sync();
module.exports = Usuario;


