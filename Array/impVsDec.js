const alunos = [
    { nome: 'Joao', nota: 7.6, bolsista: true },
    { nome: 'Ana', nota: 9.6, bolsista: true },
    { nome: 'Maria', nota: 8.2, bolsista: true },
    { nome: 'Priscila', nota: 6.5, bolsista: true }
]

//imperaativo
let total = 0
for (let i = 0; i < alunos.length; i++) {
    total += alunos[i].nota
}
console.log(total/alunos.length)

//declarativo
const getNota = aluno => aluno.nota;
const soma = (acumulo, atual) => acumulo + atual
const media = alunos.map(getNota).reduce(soma)
console.log(media/alunos.length) 