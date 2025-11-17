let valor // indefinida
console.log(valor)

valor = null // ausência de valor, não aponta para lugar nenhum
console.log(valor)
// console.log(valor.tooString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined // evitar atribuir undefinined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)