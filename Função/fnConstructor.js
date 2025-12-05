class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

p1 = new Pessoa('José')
p1.falar()

// fazer uma constructor de outra forma 