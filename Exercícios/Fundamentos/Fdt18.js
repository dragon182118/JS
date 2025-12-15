function despesas (a) {
    let total = 0
    a.forEach(e => {
        for (let c in e) {
            if (typeof e[c] == 'number') {
                total += e[c]
            }
        }
    })
    return total
}

console.log(despesas([{
    nome: 'Jornal', categoria: 'Informação', preco: 89.99
},{
    nome: 'Cinema', categoria: 'Entretenimento', preco: 150
}]))

console.log(typeof Array)