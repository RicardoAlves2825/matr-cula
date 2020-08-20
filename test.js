const Sequelize = require("sequelize");
const sequelize = new Sequelize('Banco', 'root', null, {
     host: 'localhost'
     , dialect: 'mariadb'
})
sequelize.authenticate().then(function () {
     console.log("Conectado com sucesso!");
}).catch(function (erro) {
     console.log("Falha ao se conectar: " + erro);
});

const Usuarios = sequelize.define('usuarios', {
     nome: {
          type: Sequelize.STRING
     },
     email: {
          type: Sequelize.STRING
     },
     idade: {
          type: Sequelize.INTEGER
     }
});

Usuarios.sync({ FORCE: true })

Usuarios.create({
     nome: "Gizele",
     email: "gizele@gmail.com",
     idade: "20"
})