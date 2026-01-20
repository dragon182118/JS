function trocaV (v1, v2) {
    [v1, v2] = [v2, v1]
    return v1 + ',' + v2
}

console.log(trocaV([1, 2, 3, 4], [5, 6, 7, 8]))