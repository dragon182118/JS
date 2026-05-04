
class Lancamento {
    constructor(nome = 'Generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(ano, mes){
        this.ano = ano
        this.mes = mes
        this.lancamentos = []
    }

    addLancamento(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    total() {
        let valorTotal = 0
        this.lancamentos.forEach(l => valorTotal += l.valor)
        return valorTotal
    }
}

const salario = new Lancamento('salário', 5000)
const combustivel = new Lancamento('gasolina', -500)

const joao = new CicloFinanceiro(2026, 7)
joao.addLancamento(salario, combustivel)
console.log(joao.total())