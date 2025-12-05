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

const construirPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
};
p2 = construirPessoa('João')
p2.falar()