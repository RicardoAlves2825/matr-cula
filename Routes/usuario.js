const express = require("express")
const router = express.Router()
const controllerUsu = require("../controller/Usuarios")
const passport = require("passport")

router.get('/Home', (req, res) => {
    res.render("Usuario/Home")
})
router.get('/registrar', (req, res) => {
    res.render("Usuario/registro")
})

router.get('/login', (req, res) => {
    res.render("Usuario/login")
})

//Posts
router.post('/registrar', controllerUsu.Create)

router.post('/login', (req, res, next) => {
     
    passport.authenticate("local", {
        successRedirect: "/Usuario/Home",
        failureRedirect: "/Usuario/login",
        successFlash:true,
        failureFlash:true
        
    })(req, res, next)
    
})

module.exports = router
