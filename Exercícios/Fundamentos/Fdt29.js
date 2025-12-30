function segundoM(ary) {
    let n = -Infinity
    let m2 = -Infinity
    ary.forEach(e => {
        if(e > n) {
            m2 = n
            n = e
        }
    })
    return m2
}
console.log(segundoM([1, 3, 4, 57, 4, 65]))