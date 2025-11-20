function soma(...args) {
    let soma = typeof(args[0]) === 'string' ? '': 0
    args.forEach(e => {
        soma += e
    });
    return soma
}
console.log(soma(1, 2, 4.5, 3.3, ' abroba'))
console.log(soma('abroba', ' melancia', ' banana', ' manga'))
console.log(soma(1, 2, 4.5, 3.3, ' abroba'))
