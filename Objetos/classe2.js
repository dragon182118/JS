class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, prof = 'Professor') {
        super(sobrenome)
        this.prof = prof
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const fi = new Filho


console.log(fi.__proto__)
console.log(fi)