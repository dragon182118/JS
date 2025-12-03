const x = 'global'

function fora(){
    const x = 'local'
    function dentro () {
        return x
    }
    return dentro
}

const minhafn = fora()
console.log(minhafn())

// contexto léxico em ação