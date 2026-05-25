const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios');

// mulher chinesa com o menor salário

const chineses = e => e.pais === "China"
const mulheres = e => e.genero === "F"
const menorSalario = (a, b) => { return a.salario < b.salario ? a : b }

axios.get(url).then(response => {
    const funcionarios = response.data

    const realidade = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario);


    console.log(realidade)
})