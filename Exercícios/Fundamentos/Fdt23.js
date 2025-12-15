function string (a) {
    let palavras = a.match(/\S+/g)
    return palavras.length
}
console.log(string('sim sou uma'))