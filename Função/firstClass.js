const acessorios = {
    lapisDeCor: () => {
        return ['azul', 'verde', 'vermelho']
    }
}
acessorios.canetas = () => {
    return ['preto', 'azul']
}  
console.log(acessorios.canetas())
// Funções dentro de objetos para melhor organização

function run (fun) {
    fun()
}

run(() => {return console.log('Executando...')})
// funções passando parametros de outras funções

function somaDois (a, b) {
    return function (c) {
        console.log(a + b+ c)
    }
}
somaDois(3, 8)(9)
// Funções tendo mais funções