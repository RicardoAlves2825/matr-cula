const Usuario = require("../models/Usuarios")

exports.Create = (req, res) => {
    
    var erros = []
    var memory = []
    const senha = req.body.senha
    const usuario = req.body.usuario
    const email = req.body.email
    const idade = req.body.idade
    const nome = req.body.nome
    /*nome: nome,
    idade: idade,
    email: email,
    senha: senha,
    usuario:usuario*/

    if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
        erros.push({ texto: "Nome inválido" })
    }
    if (!req.body.email || typeof req.body.email == undefined || req.body.email == null) {
        erros.push({ texto: "Email inválido" })
    }
    
    if (!req.body.idade || typeof req.body.idade == undefined || req.body.idade == null) {
        erros.push({ texto: "Idade inválido" })
    }
    
    if (!req.body.senha || typeof req.body.senha == undefined || req.body.senha == null) {
        erros.push({ texto: "Senha inválida"})
    }
    
    if (!req.body.usuario || typeof req.body.usuario == undefined || req.body.usuario == null) {
        erros.push({ texto: "Usuário inválido" })
    }
    if (erros.length > 0) {
        res.render("admin/registro", {
            erros: erros, memory: {
                nome:nome,
                senha:senha,
                email:email,
                idade:idade,
                usuario:usuario
            }})
        
    }
    else {
        Usuario.create({
            nome: req.body.nome,
            email: req.body.email,
            idade: req.body.idade,
            senha: req.body.senha,
            usuario: req.body.usuario,
        })
            .then(() => {
                req.flash("success_msg", "Usuario cadastrado com sucesso!")
                return res.redirect("/admin/Usuarios")
            })
            .catch((erro) => {
                req.flash("error_msg", "Erro a cadastrar usuario: " + erro)
                return res.redirect("/admin/Usuarios")
            });
    }
};

exports.Update = (req, res) => {
    const id = req.params.id;
    var erros = []

    if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
        erros.push({ texto: "Nome inválido" })
    }
    if (!req.body.email || typeof req.body.email == undefined || req.body.email == null) {
        erros.push({ texto: "Email inválido" })
    }
    
    if (!req.body.idade || typeof req.body.idade == undefined || req.body.idade == null) {
        erros.push({ texto: "Idade inválido" })
    }
    
    if (!req.body.senha || typeof req.body.senha == undefined || req.body.senha == null) {
        erros.push({ texto: "Senha inválida" })
    }
    
    if (!req.body.usuario || typeof req.body.usuario == undefined || req.body.usuario == null) {
        erros.push({ texto: "Senha inválida" })
    }
    if (erros.length > 0) { 
        Usuario.findByPk(id)
          .then(data => {
            res.render("admin/editar",{data:data, erros: erros})  
          }).catch(err => {
                req.flash("error_msg", "Este usuário não existe "+err)
                 res.status(500).redirect("admin/usuarios");
          });
    } else {
     
        Usuario.update(req.body, {
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    req.flash("success_msg", "Usuário editado com sucesso!")
                    return res.redirect("/admin/Usuarios")
                } else {
                    if (!id || typeof id == undefined || id == null || id == "") {
                        id = null
                        res.send({
                            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                        });
                    }
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error updating Tutorial with id=" + id
                });
            });
    }
};
  
exports.FindOne = (req, res) => {
    const id = req.params.id;
  
    Usuario.findByPk(id)
      .then(data => {
        res.render("admin/editar",{data:data})  
      }).catch(err => {
            req.flash("error_msg", "Este usuário não existe "+err)
             res.status(500).redirect("admin/usuarios");
      });
};
  
exports.DestroyOne = (req, res) => {
    Usuario.destroy({ where: { id: req.params.id } })
        .then(() => {
            req.flash("success_msg", "Usuario deletado com sucesso!")
            return res.redirect("/admin/Usuarios")
        })
        .catch((erro) => {
            req.flash("error_msg", "Erro ao deletar usuario: !" + erro)
            return res.redirect("/admin/Usuarios")
        });
};
