function melhorQTD(num) {
    let msg = ''
    let restante = 0
    let cedulas = [100, 50, 10, 5 ,1]
    if (num > 0) {
        for (let cedula of cedulas) {
            restante = Math.floor(num / cedula)
            if (restante >= 1 ){
                msg += `${restante} nota(s) de R$${cedula}. `
                num %= cedula
            }
        }
    }    
    return msg
}

console.log(melhorQTD(8))