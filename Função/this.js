const pessoa = {
    saudacao: 'oi',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar1 = pessoa.falar
falar1()// conflito entre paradigmas, ele chama apenas a função

const falar2 = pessoa.falar.bind(pessoa)
// agora a função está amarrada ao objeto
falar2()