const porta = 3003

const express = require('express')
const db = require('./database')
const app = express()

/*app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})*/ //CORRENTE DE RESPONSABILIDADE APLICADA

/*app.use((req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45 })
})*/ //USO DE REQUISIÇÃO "GLOBAL"

/*app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45 }) //Converte automaticamente para json
})*/

app.get('/produtos', (req, res) => {
    res.send(db.getProdutos()) 
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id)) 
})

app.post('/produtos', (req, res, next) => {
    const produto = db.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Rodando na porta ${porta}`)
})