Array.prototype.map2 = function(callback){
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        novoArray.push(callback(this[i], i, this))
    }
    return novoArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const precos = carrinho.map(e => { return JSON.parse(e).preco })


console.log(precos)

let resultado = precos.map2(e => {return `R$${e.toString().replace('.', ',')}`})

console.log(resultado)