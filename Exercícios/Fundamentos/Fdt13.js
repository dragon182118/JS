function filtro(ar) {
    let exA = []
    ar.forEach(e => {
        if (typeof e == 'number') exA.push(e)
    })
    return exA
}
console.log(filtro(['Sim', 2]))
console.log(filtro(['Sim']))