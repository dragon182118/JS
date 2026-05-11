const alunos = [
    { nome: 'Joao', nota: 7.6, bolsista: true },
    { nome: 'Ana', nota: 9.6, bolsista: true },
    { nome: 'Maria', nota: 8.2, bolsista: true },
    { nome: 'Priscila', nota: 6.5, bolsista: true }
]

const result = alunos.map(e => e.nota).reduce(function(acumulo, atual){
    console.log(acumulo, atual)
    return acumulo + atual
})

console.log(result)