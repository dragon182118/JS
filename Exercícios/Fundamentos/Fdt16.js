function bissexto(n) {
    if (n % 4 === 0 ) {
        if (n % 100 === 0) {
            if(n % 400 === 0 ) {
                return true
            } else {return false}
        }else {return true}
    }else { return false}
}

console.log(bissexto(400))
console.log(bissexto(2000))
console.log(bissexto(2020))
console.log(bissexto(2100))