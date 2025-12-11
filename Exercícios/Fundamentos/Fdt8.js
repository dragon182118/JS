function mult(n1, n2) {
    let multiplicado = 0
    if ([n1, n2] < [0]) {
        return 'Apenas numeros positivos'
    }else {
        for (let i = 0; i < n2; i++) {
            multiplicado += n1
        }  
    }
    return multiplicado
}
console.log(mult(5, 56525))
console.log(mult(5, 0))