const v = [1, 8, 9, 15]
function multV(v, n) {
    let nV = []
    v.forEach(e => {
        nV.push(e * n)
    })
    return nV
}
function multS (n) {
    if (n >= 5) {
        return multV(v, n)
    }else {
        return 'Não foi possível executar'
    }
    
}
console.log(multV(v, 3))
console.log(multS(4))