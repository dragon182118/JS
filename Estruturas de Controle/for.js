for(let i = 0; i <=10; i++) {
    console.log(i)
}

const notas = [1.1, 2, 3, 5, 7, 10]
for (let i = 0; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`)
}

const alunos = {
    primeiro: 'joao',
    segundo: 'marcia',
    terceiro: 'jose'
}

for(let i in alunos) {
    console.log(`${i} = ${alunos[i]}`)
}