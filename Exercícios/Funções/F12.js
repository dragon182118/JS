function pA (a1, n, r) {
    let pa = []
    let nt = a1
    for (let i =0;i<n;i++) {
        pa.push(nt)
        nt += r
    }
    return pa
}
function pG(a1, n, r) {
    let pg = []
    let nt = a1
    for (let i =0;i<n;i++) {
        pg.push(nt)
        nt *= r
    }
    return pg
}


console.log(pA(5, 20, 3))
console.log(pG(5, 6, 3))