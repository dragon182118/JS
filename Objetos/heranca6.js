function Metodo(um, dois) {
    this.um = um
    this.dois = dois
}

const met1 = new Metodo('string', ['array'])

console.log(met1)

function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const met2 = novo(Metodo, 'string', ['array'])

console.log(met2)