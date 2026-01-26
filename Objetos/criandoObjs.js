// notação literal
const obj1 = {}
// Instanciando, object em JS
const obj2 = new Object
// Funções construtoras
function Prod(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return (preco * (1 - desc)).toFixed(2)
    }
}
const p1 = new Prod('Lápis', 1.5, 0.2)
const p2 = new Prod('Lapizera', 5.5, 0.1)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// function factory
function funcionario(nome, salB, faltas) {
    return {
        nome,
        salB,
        faltas,
        getSalario() {
            return ((salB /30) * (30 - faltas))
        }
    }
}
const f1 = funcionario('João', 7980, 4)
console.log(f1.getSalario())
// object.create
const fi = Object.create(null)
fi.nome = 'Ana'

//retorno de obj

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)