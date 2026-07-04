function rand([min = 0, max = 1000]) {
    //forma de trocar variaveis com desconstructing ↓
    if(min > max) {[max, min] = [min, max]}
    const valor = Math.random() * (max - min + 1) + min;
    return Math.floor(valor)

}
for (let index = 0; index < 100; index++) {
    console.log(rand([5, 15]))
}

