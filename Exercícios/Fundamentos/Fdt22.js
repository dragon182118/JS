function sorte (n) {
    const valor = Math.floor((Math.random() * 10) +1)
    if (n == valor){
        return `Parabens o número sorteado foi ${n}`
    }else{
        return `Que pena! O número sorteado foi ${n}`
    }
}
console.log(sorte(5))