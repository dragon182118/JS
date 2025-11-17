const patreco = {
    interesse: 'sim',
    idade: 20,
    endereco: {
        rua: 'Av.comiocudequemtalendo',
        numero: 69
    }
}

const { interesse: inte, idade: i} = patreco
console.log(inte, i)

// só funciona se o caminho existir EX: { batata: { gosto } } = patreco //Erro.
const {endereco: {rua}} = patreco
console.log(rua)

const teste = patreco.endereco.numero
console.log(teste)