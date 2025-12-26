function separarVogal(str){
    const vogal = ['a', 'e', 'i', 'o', 'u']
    let novaStr = str
    vogal.forEach(e => {
        for(let a of str){
            if(e === a){
                novaStr = novaStr.replaceAll(e, '')
                
            }
        }
    })
    return novaStr
}
console.log(separarVogal('sousou no friren'))