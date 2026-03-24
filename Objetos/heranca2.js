//Cadeia de protótipos
Object.prototype.attri0 = 0;
const avo = { attri1: 'A'}
const pai = { __proto__: avo, attri2: 'B', attri3: '3'}
const filho = { __proto__: pai, attri3: 'C'}
console.log(filho.attri0, filho.attri1, filho.attri2, filho.attri3)

//console.log(pai.attri3) undefined

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }else {
            this.velAtual = this.velMax  
        }
    },
    status() {
        return ` ${this.velAtual}Km/h de ${this.velMax}Km/h`;
    }
}
const ferrari = {
    modelo: 'F40',
    velMax: 324,
}
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari, volvo)
ferrari.acelerar(400)
console.log(ferrari.status())
volvo.acelerar(190)
console.log(volvo.status())