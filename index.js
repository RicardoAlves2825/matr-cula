const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");


//config
//Template Engine 
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
//body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//conexão com o banco de dados


app.get("/cad", function (req, res) {
    //res.send("Cadastro de usuarios")
    res.render('formulario')
});

app.post('/add', function (req, res) {
    res.send("Nome: " + req.body.nome)
});


app.listen(8081, function () {

    console.log("Servidor iniciado na URL: http://localhost:8081");
});





