console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('');
}

console.log('looc nwod eht tsohg i'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log(['a', 'b'].first())

String.prototype.toString = function(){
    return 'Lascou tudo'
}

console.log('SIIIIIIMMMMMMM'.toString())