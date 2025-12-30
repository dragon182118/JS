const estudantes = {
    Joao: [10, 6.5, 8, 8.9],
    Carla: [9, 8, 9, 8],
    Maria: [10, 7, 8, 8.9]
}
function maiorNota(estudantes) {
    let nObj = {}
    let nE = 0
    let m2
    for (let key in estudantes) {
        let media = 0
        estudantes[key].forEach(e => {
            media += e
        })
        m2 = media / estudantes[key].length
        if (m2 > nE) {
            nObj.nome = key.toString()
            nObj.media = m2.toFixed(1)
        }
        nE = m2
    }
    return nObj
}
console.log(maiorNota(estudantes))