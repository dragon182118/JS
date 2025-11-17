function rand({min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

const obj = {min: 50, max: 100}
console.log(rand(obj))
console.log(rand({ min: 100}))
console.log(rand({}))
//console.log(rand()) Desestruturação sem caminho

//EXEMPLO DO PORQUE USAR A DESESTRUTURAÇÃO, CONTROLE DE PARAMETROS POR OBJETOS.
function rand1(min = 0, max = 1000) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

const obj1 = {min: 50, max: 100}
console.log(rand1(obj))
console.log(rand1({ min: 100}))
console.log(rand1({}))