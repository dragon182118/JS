Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++ ){
        if (callback(this[i], i, this)) {newArray.push(this[i])}
    }
    return newArray 
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.9, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false },
]

const caro = p => p.preco > 500
const fragil = p => p.fragil

console.log(produtos.filter2(caro).filter2(fragil))
