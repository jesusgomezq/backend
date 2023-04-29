class Contador{
    constructor(responsable){
        this.responsable = responsable
        this.contador = 0
    }

    static contadorGlobal = 0

    getResponsable = () =>{
        return this.responsable
    }

    contar = () =>{
        this.contador++
        Contador.contadorGlobal++
    }

    getCuentaIndividual = () =>{
        return this.contador
    }

    getCuentaGlobal = () =>{
        return Contador.contadorGlobal
    }

}

const cuenta1 = new Contador('Maria')
cuenta1.contar()
cuenta1.contar()
cuenta1.contar()
console.log(cuenta1.getCuentaIndividual());

const cuenta2 = new Contador('Alejandra')
cuenta2.contar()
cuenta2.contar()
cuenta2.contar()
console.log(cuenta2.getCuentaIndividual());

const cuenta3 = new Contador('Jesus')
cuenta3.contar()
cuenta3.contar()
cuenta3.contar()
console.log(cuenta3.getCuentaIndividual());
console.log(Contador.contadorGlobal);