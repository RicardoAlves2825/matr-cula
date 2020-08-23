//Carregando módulos
const express = require("express")
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
const app = express();
const admin = require("./Routes/admin")
const path = require("path")
const session = require("express-session")
const flash = require("connect-flash")

// Configurações
 // Session
    app.use(session({
        secret: "session",
        resave: true,
        saveUninitialized:true}))
    app.use(flash())
 // Middleware
    app.use((req, res, next) => {
        res.locals.success_msg = req.flash("success_msg")    
        res.locals.error_msg = req.flash("error_msg")
        next()
    })
 // Body parser 
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
 // Handlebars
    app.engine("handlebars", handlebars({ defaultLayout: "main" }), handlebars());
    app.set("view engine", "handlebars");
 // Sequelize
 // Public
    app.use(express.static(path.join(__dirname,"public")))
 // Rotas
    app.get('/', (req, res) => {res.redirect("/admin/usuarios")})
    app.use('/admin',admin)    
// Outros
    const PORT = 8080
    app.listen(PORT, function () {
        console.log("Servidor iniciado na URL: http://localhost:8080");
    });
