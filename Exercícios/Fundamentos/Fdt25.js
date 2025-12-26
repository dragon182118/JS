function palavrasRepetidas(str, arry){
    let a = []
    arry.forEach(e => {
        let s = ''
        for(let c of e) {
            s += c
            if(str === s){
                a.push(e)
            }
        }
    });
    return a
}
console.log(palavrasRepetidas('pro', ['prato', 'professor', 'progamador', 'sistemas']))