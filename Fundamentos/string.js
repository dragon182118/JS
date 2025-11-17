const string1 = "Batata1"
const string2 = "Batata2"
const string3 = "Batata3"

// console.log(string1.charAt(1)) antigo...

console.log(string1[1])

// para pegar o código unicode
console.log(string2.charCodeAt(6))

// retorna o index do caractere
console.log(string3.indexOf('B'))

// retorna a cadeia entre o index selecionado
console.log(string1.substring(0, 4))

// replace
console.log(string1.replace('B', 'j'))

// retorna em um array usando um separador
console.log('jojo kimetsu naruto'.split(' '))
// unicode exemplo
const code = 0x1F409
const char = String.fromCodePoint(code)
console.log(char)

