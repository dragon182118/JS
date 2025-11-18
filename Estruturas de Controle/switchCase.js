const imprimir = (nota) => {
    switch (Math.floor(nota)){
        case 10:
        case 9:  
            console.log('Quadro de honra')
            break
        case 8: case 7:
            console.log('Recuperação')      
            break
        default:
            console.log('Nota inválida')    
    }
}



imprimir(7)
imprimir(1)