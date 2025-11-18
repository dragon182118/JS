//if
function boaNot(nota) {
    if (nota >= 7) {
        console.log('Parabéns, você passou!');
    }
}
boaNot(8)
function vdd(valor) {
    if (valor) {
        console.log('Verdade! ' + valor);
    }
}
vdd(1)
vdd(null)
vdd(undefined)
vdd(' ')

//else
function boaNot2(nota) {
    if (nota >= 7) {
        console.log('Parabéns, você passou!');
    } else {
        console.log('Que pena, você não passou!');
    }
}
boaNot2(5.2)
boaNot2(7.9)

//elseif

Number.prototype.entre = function (ini, fim) {
    return this >= ini && this <= fim
}

function tratamento(e) {
    throw {
        msg: e.message,
    }
}

const imprimirResultado = (nota) => {
    try {
        if (nota.entre(9, 10)) {
            console.log('Quadro de Honra')
        } else if (nota.entre(7, 8.99)) {
            console.log('Aprovado')
        } else if (nota.entre(4, 6.99)) {
            console.log('Recuperação')
        } else if (nota.entre(0, 3.99) ) {
            console.log('Reprovado')
        } else {
            console.log('Nota inválida')
        }
    } catch (e) {
        console.log( nota + ' Não é uma resposta válida.')
        tratamento(e)
    }
}

imprimirResultado(10)
imprimirResultado(5)
imprimirResultado(7)
imprimirResultado(1)
imprimirResultado(-1)
//imprimirResultado('sim')