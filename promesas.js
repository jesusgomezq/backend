const suma = (numero1, numero2) =>{
    return new Promise((resolve, reject) =>{
        if(numero1 === 0 || numero2 === 0) reject('No hace falta')
        if(numero1 + numero2 < 0) reject('Solo positivos, gracias')
        resolve(numero1 + numero2)
    })
}

const resta = (numero1, numero2) =>{
    return new Promise((resolve, reject) =>{
        if(numero1 === 0 || numero2 === 0) reject('No hace falta')
        if(numero1 - numero2 < 0) reject('Solo positivos, gracias')
        resolve(numero1 - numero2)
    })
}

const multiplicacion = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if(numero1 === 0 || numero2 === 0) reject('No hace falta')
        if(numero1 * numero2 < 0) reject('Solo positivos, gracias')
        resolve(numero1 * numero2)
    })
}

const calculo = async () => {
    try {
        let numero1 = 15
        let numero2 = 20

        let resultadoSuma = await suma(numero1, numero2)
        console.log(resultadoSuma);
        
        let resultadoResta = await resta(numero1, numero2)
        console.log(resultadoResta);

        let resultadoMul = await multiplicacion(numero1, numero2)
        console.log(resultadoMul);
        
    } catch (error) {
        console.log('Pero que ha pasao, chabal esto esta mal');
    }
}
calculo()