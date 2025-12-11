function removedorDeAtributos (objeto, atributo) {
    let obj2 = {...objeto}
    delete obj2[atributo]
    return obj2
}
const obj = {a: 1, b: 2}
console.log(removedorDeAtributos(obj, 'a'))
console.log(removedorDeAtributos({
    id: 20,
    nome: 'caneta',
    descricao: 'Não preenchido'
}, 'descricao'))

console.log(Object.is(obj, removedorDeAtributos(obj, 'a')))