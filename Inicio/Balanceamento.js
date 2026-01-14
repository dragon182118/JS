function balancear(...valores) {
    let x = -Infinity
    let i = 0
    const totalO = valores[0] * valores[1]
    if (i < valores[1]) {
        while (!(x % valores[2] === 0)) {
            x = totalO - (valores[0] * (valores[1] - (i + 1)))
            i++
        }
    }else {
        return `Não foi encontrado um multiplo de ${valores[2]} nessa equação`
    }
    return `Valores novos: QUANTIDADE1: ${valores[0]}, VALOR1: ${((totalO - x) / valores[0])}, Quantidade2: ${valores[2]}, Valor2: ${x / valores[2]}`
    
}

// Entrada: QUANTIDADE1 -> VALOR UNITÁRIO -> QUANTIDADE2
console.log(balancear(52, 38, 18))