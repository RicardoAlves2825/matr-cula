const express = require("express")
const router = express.Router()
const Usuarios = require("../models/Usuarios");
const controllerUsu = require("../controller/Usuarios")

router.get('/', (req, res) => {
    res.render("admin/index")
})

router.get('/usuarios', (req, res) => {
    Usuarios.findAll({ order: [["createdAt", "ASC"]] }).then(function (usuarios) {
        res.render("admin/usuarios", { usuarios: usuarios });
      });
})
router.get('/usuarios/registrar/', (req, res) => {
    res.render("admin/registro")
})
router.get("/usuarios/deletar/:id",controllerUsu.DestroyOne);
  
router.get("/usuarios/editar/:id", controllerUsu.FindOne)

router.post('/usuarios/editar/save/', (req, res) => {
    req.flash("error_msg", "Usuario não existe" )
    res.redirect("/admin/usuarios")
})

// Post's
router.post('/usuarios/registrar/add', controllerUsu.Create)
router.post('/usuarios/editar/save/:id', controllerUsu.Update)



module.exports = router
