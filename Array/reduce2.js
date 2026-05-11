const alunos = [
    { nome: 'Joao', nota: 7.6, bolsista: false },
    { nome: 'Ana', nota: 9.6, bolsista: false },
    { nome: 'Maria', nota: 8.2, bolsista: true },
    { nome: 'Priscila', nota: 6.5, bolsista: false }
]

const bolsaInfo = alunos.map(a => a.bolsista)

const allBolsa = (resultado, bolsista) => resultado && bolsista
const someBolsa = (resultado, bolsista) => resultado || bolsista

console.log(bolsaInfo.reduce(allBolsa))
console.log(bolsaInfo.reduce(someBolsa))

