function menor (a) {
    let menor = 0
    a.forEach(e => {
        if (menor == 0) {
            menor = e
        }else if (menor > e){
            menor = e
        }
    })
    return menor
}

console.log(menor([33, 6, 4 ,8 , -22]))