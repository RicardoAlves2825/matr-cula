const express = require("express")
const router = express.Router()
const Usuarios = require("../models/Usuarios");
const controllerUsu = require("../controller/Usuarios")
const {admin} = require("../Config/permissions")

router.get('/', admin,(req, res) => {
    res.render("admin/index")
})

router.get('/usuarios',admin, (req, res) => {
    Usuarios.findAll({ order: [["createdAt", "ASC"]] }).then(function (usuarios) {
        res.render("admin/usuarios", { usuarios: usuarios });
      });
})
router.get("/usuarios/deletar/:id",admin,controllerUsu.DestroyOne);
  
router.get("/usuarios/editar/:id",admin, controllerUsu.FindOne)

router.post('/usuarios/editar/save/',admin, (req, res) => {
    req.flash("error_msg", "Usuario não existe" )
    res.redirect("/admin/usuarios")
})

// Post's
router.post('/usuarios/editar/:id',admin, controllerUsu.Update)



module.exports = router
