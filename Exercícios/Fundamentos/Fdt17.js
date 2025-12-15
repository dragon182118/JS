function somaA (a) {
    let cont = 0
    a.forEach(element => {
        if(typeof element ==  'number') {
           cont += element
        }
    });
    return cont
}

console.log(somaA([1, 2, 3, 5]))