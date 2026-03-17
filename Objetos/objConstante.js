const pessoa = {nome: 'Joao'}
//apenas congela o objeto inteiro
Object.freeze(pessoa.nome)
pessoa.cidade = 'Contagem'
pessoa.nome = 'Maria'

//pessoa = mar

console.log(pessoa)