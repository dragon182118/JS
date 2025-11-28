const batata = {
    mostrarPai: 'pai',
    filho: ab = {
        mostrarFilho: 'filho',
        teste: () => {
            console.log(this.mostrarPai)
            console.log(this.mostrarFilho)
            console.log(this === module.exports)
        }
    }

}
const amarra = batata.filho.teste.bind(batata.filho)
amarra()
