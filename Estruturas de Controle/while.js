function getRandomInt(min, max) {
    const valor = Math.random() * (max -min) + min
    return Math.floor(valor)
}

let opcao = 0
while (opcao != -1) {
    opcao = getRandomInt(-1, 10)
    console.log(opcao)
}
console.log('fim desse while')

function getRandomInt2(min, max) {
    const valor = Math.random() * (max -min) + min
    return Math.floor(valor)
}

let opcao2 = 0
do {
    opcao2 = getRandomInt2(-1, 5)
    console.log(opcao2)
} while (opcao2 != -1); 
    
