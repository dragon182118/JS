const pai = {nome: 'Pedro', corDeCabelo: 'Castanho'}
console.log(pai)
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.nome, filha1.corDeCabelo);

const filha2 = Object.create(pai, {
    nome: {value: 'Maria', writable: false, enumerable: true}
})

console.log(filha2.nome, filha2.corDeCabelo)

console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log('Por herança: ' + key)
}