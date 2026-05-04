const obj = { a: 1, b: 2, meuJSON(){return a + b}}
console.log(JSON.stringify(obj))

// para abrir um texto use '', para string ""

console.log(JSON.parse('{"a": 1.2, "b": "vaca", "c": 3}'))


// converte apenas dados como objetos
const meuJSON = '{"A": 1, "vaca": 2, "atolou": []}'
console.log(JSON.parse(meuJSON))