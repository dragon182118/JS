const pai = Object.preventExtensions({nome: 'Pedro', corDeCabelo: 'Castanho'})
pai.sobreNome = 'Jose';
pai.nome = 'Paulo'
delete pai.corDeCabelo
console.log(Object.isExtensible(pai))
console.log(pai)


const pa2 = {nome: 'Pedro', corDeCabelo: 'Castanho'}
Object.seal(pa2)
pa2.sobreNome = 'Jose';
pa2.nome = 'Jão'
delete pa2.corDeCabelo
console.log(pa2)
console.log(Object.isSealed(pa2))


//Object.freeze deixa imutável