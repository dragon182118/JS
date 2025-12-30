const items = {
    item1: {
        codigo: 100,
        descricao: 'Cachorro Quente',
        preco: 3.00
    },
    item2: {
        codigo: 200,
        descricao: 'Hambúrguer Simples',
        preco: 4.00
    },
    item3: {
        codigo: 300,
        descricao: 'Cheeseburguer',
        preco: 5.50
    },
    item4: {
        codigo: 400,
        descricao: 'Bauru',
        preco: 7.50
    },
    item5: {
        codigo: 500,
        descricao: 'Refrigerante',
        preco: 3.50
    },
    item6: {
        codigo: 600,
        descricao: 'Suco',
        preco: 2.80
    },
}

function calcPreco(cod, qtd) {
    switch (cod) {
        case 100:
            return (items.item1.preco * qtd).toFixed(2)
        case 200:
            return (items.item2.preco * qtd).toFixed(2)
        case 300:
            return (items.item3.preco * qtd).toFixed(2)
        case 400:
            return (items.item4.preco * qtd).toFixed(2)
        case 500:
            return (items.item5.preco * qtd).toFixed(2)
        case 600:
            return (items.item6.preco * qtd).toFixed(2)
        default:
            return 'Produto não existente'
    }
}
console.log(calcPreco(500, 8))