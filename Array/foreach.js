const myarray = ['s', 'b', 'c', 'h']

myarray.sort();

myarray.forEach((el, i, array) => {
    console.log(`Posição ${i + 1}) com elemento ${el}, do array ${array}`)
})