const myVetor = [2, 3, 5, 10, 14, 17, 23, 45, 76]

function entreV(){
    let fora = 0
    let dentro = 0
    for (let i = 0; i < myVetor.length; i++) {
        if (myVetor[i] >= 10 && myVetor[i] <= 20) {
            dentro++
        }else{
            fora++
        }
    }
    return `Estão dentro do intervalo: ${dentro} E estão fora: ${fora}`
}

console.log(entreV())