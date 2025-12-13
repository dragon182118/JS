function objParaArray (obj) {
    let aVazio = []
    for (let chave in obj) {
        aVazio.push([chave, obj[chave]])
    }
    return aVazio
}

console.log(objParaArray({nome: 'Maria', profissao: 'dama da noite'}))