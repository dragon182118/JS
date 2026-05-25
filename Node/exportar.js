console.log(module.exports)
console.log(this === module.exports)
console.log(exports === module.exports)
this.a = 1
exports.b = 2
module.exports.c = 3

console.log(module.exports)

exports = {}

console.log(module.exports)

module.exports = {public: true}