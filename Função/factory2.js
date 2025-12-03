function Produtos(...args) {
    let itens = {}
    args.forEach(e => {
        for (let key in e) {
            itens[key]= e[key]
        }
    });
    return itens
}
console.log(Produtos({caneta: 'azul'},{lapis: 'rosa'}))

//correção

function Produtos1 (nome, valor) {
    return {
        nome,
        valor
    }
}
console.log(Produtos1('Notebook', 3199.99))
console.log(Produtos1('MagicPen', 199.99))