const fs = require('fs')

const produto = {
    nome: 'Batata',
    preço: 4.59,
    desconto: 0.1
}

fs.writeFile(__dirname + '/arquivoEscrito.json', JSON.stringify(produto), err => {
    console.log(err || "Arquivo salvo!")
})