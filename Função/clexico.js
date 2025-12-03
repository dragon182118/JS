const valor = 'global'

function mfn () {
    console.log(valor)
}

function exec () {
    const valor = 'local'
    mfn()
}

exec()