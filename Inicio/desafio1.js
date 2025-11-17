console.log('say hi');
let c = 0;
let pi = 3.14;
let r = 10;
function circunferencia() {
    if (c > 0) {
        r = c/(2 * pi);
        return (r);
    }else {
        let cir= 2 * pi * r;
        return (cir);
    }

}
console.log(circunferencia())
if (c > 0) {
    console.log("O raio é de: " + circunferencia())
} else {
    console.log("A circunferencia é de: " + circunferencia())
}
