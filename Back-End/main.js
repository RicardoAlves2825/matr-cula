var nome = 'ricardo';
var clc = require("cli-color"); //utilizando pacote
var funcoes = require("./functions.js");
var http = require("http");
var fs = require("fs");

function exibir(msg) {
    console.log(clc.green("Olá",msg));
   console.log(clc.red(funcoes.validar(nome,"123")));
}
exibir(nome);

http.createServer(function(request,response) {
    fs.readFile("/Intranet/Front-End/index.html",function (erro, conteudo) {
        if(erro){
              console.log(erro);
        }
        else{
            response.write(conteudo);
        }
        response.write("Teste de aplicação WEB com Node js");
        response.end();
    })
}
).listen(8081);

console.log("Servidor rodando em: http://localhost:8081");

