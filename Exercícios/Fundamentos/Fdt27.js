function objetosInvertidos(obj){
    let newobj = {}
    for (let chave in obj) {
        newobj[obj[chave]] = chave
    }
    return newobj
}
const nobj = {a: 1, b: 2, c: 3} 
console.log(objetosInvertidos(nobj))