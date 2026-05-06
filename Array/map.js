const nums = [1, 2, 3, 4, 5]

let result = nums.map(e => {return (e * 3) + (2**5)})

console.log(result)

const fatorial = e => {
   let fator = e
   let fator2 = e
   for (let i=1; i < e; i++) {
    fator2--
    fator = fator * (fator2)
   }
   return fator
}

result = nums.map(fatorial)

console.log(result)