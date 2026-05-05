const palavras= ['sim', 'não', 'são', 'nim']

palavras.pop()
console.log(palavras)

palavras.shift()
console.log(palavras)

palavras.unshift('nim', 'sim', 'num')
console.log(palavras)

const palavrasCortadas1 = palavras.slice(1)
console.log(palavrasCortadas1)

const palavrasCortadas2 = palavras.slice(1, 2)
console.log(palavrasCortadas2)