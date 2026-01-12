const alunos = {
    5041: [7, 6, 10],
    5641: [8, 4, 9],
    5841: [1, 5, 9]
}

function mediaPond(cod) {
    let peso = 0
    let mediap = 0
    const p1 = 4
    const pN = 3
    alunos[cod].forEach(e => {
        peso++
        if (peso == 1) {
            mediap += e * p1
        }else {
            mediap += e * pN
        }
    })
    peso = 0
    mediap = mediap / (p1 + (pN * 2))
    if (mediap >= 5) {
        return `${cod}: ${alunos[cod]}, média: ${mediap}, APROVADO`
    }else if (mediap < 5){
        return `${cod}: ${alunos[cod]}, média: ${mediap}, REPROVADO`
    }else {
        return 'Digite um código válido'
    }
}
console.log(mediaPond(5841))