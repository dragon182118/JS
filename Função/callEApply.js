function getPreco (imposto = 0, moeda = 'R$') {
    return `${moeda}${this.preco * (1 - this.desc) * (1 + imposto)} `
}

const carro = {preco: 31999, desc: 0.2}
console.log(getPreco.call(carro, 0.17,'$'))
console.log(getPreco.apply(carro,[2]))
//call e apply