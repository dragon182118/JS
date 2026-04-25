function MeuObjeto(){
}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

MeuObjeto.prototype.nome = 'Arlecchino'
MeuObjeto.prototype.adorar = function() {console.log(`Minha Deusa é a ${this.nome}`)}

console.log(obj1.nome)
console.log(obj1.__proto__ === MeuObjeto.prototype)
console.log(obj1.__proto__ === obj2.__proto__)
obj1.adorar()
obj2.nome = 'Columbina'
obj2.adorar()


console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)