const fabricantes = ['BMW', 'Mercedes', 'Forge']

function imprimir (nome, indice) {
    console.log(`${indice}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(a => console.log(a))