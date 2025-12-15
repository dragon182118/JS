function carc (a, b) {
    let valor = 0
    for (let c of b) {
        if(c === a) valor++        
    }
    return valor
}
console.log(carc('B', 'Bosta murcha bebe o balde'))