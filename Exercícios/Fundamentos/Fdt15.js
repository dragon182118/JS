function apenasPares (arr) {
    let aVazio = []
    for (let i = 0; i < arr.length; i++) {
        let e = arr[i]
        if (e % 2 == 0) {
            if (i % 2 == 0) {
                aVazio.push(e)
            }
        }
    }
    return aVazio
}

console.log(apenasPares([1, 2, 5, 8, 22, 48, 10, 40]))