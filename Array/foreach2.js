Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}
const myarray = ['s', 'b', 'c', 'h']

myarray.sort();

myarray.forEach2((el, i, array) => {
    console.log(`Posição ${i + 1}) com elemento ${el}, do array ${array}`)
})
