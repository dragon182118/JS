const funcs = []
for (var i=0; i < 10; i++) {
    funcs.push(() => {
        console.log(i)
    })
}
//escopo global
funcs[2]();
funcs[8]();

const funcs2 = []
for (let i=0; i < 10; i++) {
    funcs2.push(() => {
        console.log(i)
    })
}
//escopo local, bloco
funcs2[2]();
funcs2[8]();