const nome = 'Jonas';
const concat = 'Olá ' + nome + '!';
console.log(concat);

// template string `` versatilidade na criação de textos dinamicos
const template = `
    Olá 
    ${nome}!`;
console.log(template);
//expressões em template
console.log('1 + 1 = ' + `${1+1}`)
//funções também
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`)