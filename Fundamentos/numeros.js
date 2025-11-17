const p1 = 1
const p2= Number('2.0')

console.log(p1, p2)

console.log(Number.isInteger(p1))
console.log(Number.isInteger(p2))

const aval1 = 9.432
const aval2 = 5.22

const total = aval1 * p1 + aval2 * p2
const media = total / (p1 + p2)


console.log(media.toFixed(2)) //vira string ao usar!!
console.log(media.toString(2)) //binário
console.log(typeof media)