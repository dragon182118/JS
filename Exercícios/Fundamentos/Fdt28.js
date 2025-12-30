function fQuantidade(ary, n) {
    let aV = []
    ary.forEach(e => { 
        if(e.toString().length == n) aV.push(e)
    })
    return aV
}

const qDigitos = 2;
const aryN = [38, 265, 88, 2, 9, 842, 33, 52, 18]
console.log(fQuantidade(aryN, qDigitos))