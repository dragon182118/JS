console.log(Math.floor(6.1));
const obj = {}
obj.nome = 'bola'

function obj1(nome){
    this.nome = nome
    this.exec = () => {
        console.log('Executando...');
    }
}
const obj2 = new obj1('mesa')
console.log(obj2.nome)
obj2.exec();

