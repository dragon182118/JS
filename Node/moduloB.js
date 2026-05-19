module.exports = {
    batata: 'pão',
    boanoite(){
        return 'boa noite';
    }
}
const moduloA = require('./moduloA');

console.log(moduloA.sim, moduloA.ola, moduloA.roi)