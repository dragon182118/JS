function entre(n, min, max, inc = false) {
    if (inc) {
        return n >= min && n <= max
    }
    return n > min && n < max
}

console.log(entre(50, 10, 100))
