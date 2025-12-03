function Pressao(aPMin = 10, pMax = 100) {
    // atributo privado
    let pressaoAtual = 0

    // metodo público
    this.aumentarPressao = (i = 1) => {
        for (let n = 0; n < i; n++) {
            if (pressaoAtual + aPMin <= pMax) {
                pressaoAtual += aPMin
            } else {
                pressaoAtual = pMax
            }
        }
    }

    this.getPressaoAtual = () => pressaoAtual
}

const bola = new Pressao(5, 50)
bola.aumentarPressao();
console.log(bola.getPressaoAtual())

const pneu = new Pressao
pneu.aumentarPressao(7)
console.log(pneu.getPressaoAtual())