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