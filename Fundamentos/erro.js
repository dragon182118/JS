
function tratamento (erro) {
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function nomeGritado (obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratamento(e)
    }
}
const nome = {
    nome: 'Marcia',
    idade: 18, 

}
nomeGritado(nome)