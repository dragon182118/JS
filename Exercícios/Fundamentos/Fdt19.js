function mediaAr(...a) {
    let media = 0
    if (Array.isArray(a[0])) {
        a[0].forEach(e => {
            if (typeof e == 'number') {
                media += e
            }
        })
        return media / a[0].length
    } else {
        a.forEach(e => {
            if (typeof e == 'number') {
                media += e
            }
        })
        return media / a.length
    }
    
}

console.log(mediaAr(10, 20, 1, 33))
console.log(mediaAr([10, 20, 1, 33]))