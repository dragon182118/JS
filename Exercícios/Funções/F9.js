const strings = ['apetrechos', 'rosas']

function carcIgual() {
    let str1 = ''
    let str2 = ''
    let boll = 0
    if (strings[0].length > strings[1].length){
        str1 = strings[0]
        str2 = strings[1]
    }else {
        str1 = strings[1]
        str2 = strings[0]
    }
    for (let i=0; i<str2.length; i++) {
        for (let n=0; n<str1.length; n++){
            if (str2[i] == str1[n]) {
                boll++
            }
        }
    }
    if (boll == str2.length) {
        return true
    }else {
        return false
    }
}

console.log(carcIgual())