const moduloa = require('../../moduloA');
console.log(moduloa.roi)

//procura o index.js na pasta se não houver caminho
//como está dentro do node modules não precisamos especificar o caminho.
const saudacao = require('saudacao')
console.log(saudacao.ola)


/*const http = require('http')
 http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end();
 }).listen(8080)
*/