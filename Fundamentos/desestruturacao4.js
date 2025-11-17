function rand([min = 0, max = 1000]) {
    //forma de trocar variaveis com desconstructing ↓
    if(min > max) {[max, min] = [min, max]}
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)

}
console.log(rand([1500, 1220]))
console.log(rand([922]))
console.log(rand([, 98]))
console.log(rand([]))