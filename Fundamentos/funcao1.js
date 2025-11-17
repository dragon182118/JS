function imprimirSoma (a, b) {
    console.log(a + b)

}

imprimirSoma(5, 8)

function returnSoma (a, b = 1)  {
    return(a + b)
}
console.log(returnSoma(4, 5))
console.log(returnSoma(4))
console.log(returnSoma())