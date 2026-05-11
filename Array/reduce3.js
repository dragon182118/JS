Array.prototype.reduce2 = function (callback, valorInicial) {
    const indice = valorInicial !== undefined ? 0 : 1; 
    let accumulated = valorInicial !== undefined ? valorInicial: this[0];
    for (let i = indice; i < this.length; i++) {
        accumulated = callback(accumulated, this[i], i, this)
    }
    return accumulated
}
const alunos = [
    { nome: 'Joao', nota: 7.6, bolsista: true },
    { nome: 'Ana', nota: 9.6, bolsista: true },
    { nome: 'Maria', nota: 8.2, bolsista: true },
    { nome: 'Priscila', nota: 6.5, bolsista: true }
]

const result = alunos.map(e => e.nota).reduce2(function (acumulo, atual) {
    console.log(acumulo, atual)
    return acumulo + atual
}, 12)

console.log(result)
