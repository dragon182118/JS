const escola =[{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Rafael',
        nota: 8.9
    }, {
        nome: 'Sandra',
        nota: 8
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Galadriel',
        nota: 7.6
    }, {
        nome: 'Matheus',
        nota: 10
    }] 
}]

const getNota = e => e.nota
const getTurma = e => e.alunos.map(getNota)

const notas = escola.map(getTurma)
console.log(notas)

Array.prototype.flatmap2 = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

console.log(escola.flatmap2(getTurma))