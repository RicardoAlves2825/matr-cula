const localStrategy = require("passport-local")
const Usuario = require("../models/Usuarios")
const bcrypt = require("bcryptjs")

module.exports = function (passport) {
    passport.use(new localStrategy({ usernameField: "usuario",passwordField:"senha" }, (usuario, senha, done) => {
        
        Usuario.findOne({where:{usuario:usuario}}).then((usuario) => {
           
            if (!usuario) {
                return done(null,false,{message:"Esta conta não existe"})
            }
            
            bcrypt.compare(senha, usuario.senha, (erro, batem) => {
                if (batem) {
                      return done(null,usuario)
                } else {
                    return done(null,false,{message:"Senha incorreta"})
                }
                
              })

        })

    }))
    passport.serializeUser((usuario, done) => {
        done(null,usuario)
    })
    passport.deserializeUser((id, done) => {
        Usuario.findOne({ where: { ID: id } }).then((erro, usuario) => {
            done(erro,id)
        })
    })

}
