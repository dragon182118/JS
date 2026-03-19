const pessoa = {
    nome: 'Laura',
    idade: 25,
    peso: 80,
    sim(){
       return 'oi' 
    }
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'estadoCivil', {
    enumerable: true,
    writable: false,
    configurable: true,
    value: 'Solteira'
})

console.log(pessoa)

const sim = {a: 1}
const o1 = {b:2}
const o2 = {c: 3, a: 4}
const newobj = Object.assign(sim, o1, o2)
console.log(newobj)