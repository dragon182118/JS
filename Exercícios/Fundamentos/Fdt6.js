function inverso(d) {
    if (typeof d === 'boolean') {
        if (d == true) {
            return false
        }else { return true}
    } else {
        if (typeof d === 'number') {
            return (d - (d * 2))
        } else {return 'invalido'}
    }
}
console.log(inverso(2))
console.log(inverso(1505))
console.log(inverso(1 > 5))
console.log(inverso('' != ' '))
