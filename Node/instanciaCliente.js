const contadora = require('./instanciaUnica')
const contadorb = require('./instanciaUnica')

const contadorc = require('./instanciaNova')()
const contadord = require('./instanciaNova')()

contadora.inc()
contadora.inc()
console.log(contadorb.valor)

contadorc.inc()
contadorc.inc()
console.log(contadord.valor)