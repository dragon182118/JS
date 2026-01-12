function crescimentoAnual (c1, tax1, c2, tax2) {
    let anos = 0
    if( c1 > c2 ) {    
        while (c2 < c1) {
            c2 += c2 * tax2
            c1 += c1 * tax1
            anos ++
        }
        return `A segunda criança ultrapassará a maior em ${anos} anos`
    }else if (c2 > c1){
        while (c1 < c2) {
            c1 += c1 * tax1
            c2 += c2 * tax2
            anos ++
        }
        return `A primeira criança ultrapassará a maior em ${anos} anos`
    }
}
const c1 = 50
const c2 = 80
const tax1 = 0.25
const tax2 = 0.15
console.log(crescimentoAnual(c1, tax1, c2, tax2))