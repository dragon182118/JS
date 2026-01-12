function valor(mes, valor) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro' ]
    if (mes < 1 || valor < 1 || mes == undefined || valor == undefined || mes > 12) {
        return 'Digite valores válidos'
    } else {
        if (mes > 1) {
            for (let i=0;i<(mes - 1);i++) {
                valor += valor * 0.05
            }
            valor = Math.floor(valor)
            return `Deve ser pago R$${valor} no mês de ${meses[mes - 1]}`
        } else {
            return `Deve ser pago R$${valor} no mês de ${meses[mes - 1]}`
        }
    }

}


console.log(valor(13, 1500))