function convenio(i) {
    if (i < 10){
        return 'Você pagará R$180'
    }else if (i > 10 && i < 30) {
        return 'Você pagará R$150'
    }else if (i > 30 && i < 60) {
        return 'Você pagará R$195'
    }else if (i > 60) {
        return 'Você pagará R$230'
    }else {
        return 'Digíte umm valor válido'
    }
}

console.log(convenio(55))