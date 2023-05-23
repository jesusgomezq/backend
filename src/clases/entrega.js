// importamos fs
import fs from 'fs'

// creamos ela rchivo para ser guardado en un array
const crear = async (path) => {
    try {
        await fs.promises.writeFile(path, '[]')
    } catch (error) {
        console.log('Error de codigo', error);
    }
}

// validamos que el producto exista, de no se asi, que lo cree
const validacion = async (path) => {
    const state = fs.existsSync(path)
    if (state === false) {
        await crear(path)
    }
}

// vamos a cargar los datos en unn array, en formato string
const cargarData = async (path, array) => {
    try { 
        return JSON.stringify(await fs.promises.writeFile(path, JSON.stringify(array, null, '\t')))
    } catch (error) {
        throw error
    }
}

// leeremos nuestro producto guardado en el archivo
const lectura = async (path) => {
    try {
        return JSON.parse(await fs.promises.readFile(path, 'utf-8'))
    } catch (error) {
        console.log('Se produjo un error', error);
    }
}

// Creamos la clase ProductManager con su respectivo constructor
export default class ProductManager {
    constructor(path) {
        this.path = path
    }

    // En este punto hacemos el llamado a nuestros productos
    async getProducts() {
        try {
            await validacion(this.path)
            return lectura(this.path)
        } catch (error) {
            throw error
        }
    }


    // Hacemos un addProduct para agregar prodctos
    async addProduct(obj) {
        const { id, title, description, price, thumbnail, code, stock } = obj
        try {
            // Hacemos una validacion para que el producto ver si el producto existe 
            if (!(id, title && description && price && thumbnail && code && stock)) {
                throw new Error('Error producto no existente, ingrese un valor valido');
            }

            await validacion(this.path)
            let array = await lectura(this.path)
            let longitud = array.length
            let index = 0
            if (longitud === 0) {
                index = 1
            } else {
                index = array[longitud - 1].id + 1
            }
            obj.id = index
            array.push(obj)
            await cargarData(this.path, array)
            console.log('Se creo el producto', obj.id);
        } catch (error) {
            throw error
        }
    }

    // funcion para eliminar algun producto da la lista 
    async removeProduct(id) {
        try {
            await validacion(this.path)
            let array = await lectura(this.path)
            const resultado = array.some((x) => x.id === id)
            console.log(resultado);
            if (resultado === true) {
                array = array.filter((x) => {
                    return x.id != id
                })
            } else {
                throw new Error('El id no existe')
            }
            await cargarData(this.path, array)
            console.log(array);
        } catch (error) {
            throw error
        }
    }

    // Agregamos productos por su id 
    async getProductById(id) {
        try {
            await validacion(this.path)
            let array = await lectura(this.path)
            array = array.filter((x) => {
                return x.id === id
            })
            if (array.length === 0) throw new Error('No se encontro el obj')
        } catch (error) {
            throw error
        }
    }

    async upDateProduct(objeto) {
        try {
            await validacion(this.path)
            let array = await lectura(this.path)
            let index = array.findIndex((x) => x.id === objeto.id)
            if (index === -1) {
                throw new Error('No se encuentra el objeto')
            } else {
                array[index] = objeto
                await cargarData(this.path, array)
                return array
            }
        } catch (error) {

        }
    }

    consultarPorId = async(id)=>{
        const products = await this.consultaDeProducto()
        const producstConsultado = products.find((product) =>{
            return product.id == id
        }) 
        return producstConsultado
    }

}



const prueba = async () => {
    try {
        let article = {
            title: 'Tramontina',
            description: 'Cacerola',
            code: 2343,
            thumbnail: 'Sin imagen',
            price: 300,
            stock: 10,
            id: 1
        }
        let article2 = {
            title: 'Cool bazar',
            description: 'Sarten',
            code: 2344,
            thumbnail: 'Sin imagen',
            price: 400,
            stock: 20,
            id: 2
        }

        const path = './clases/flie/products.json'
        const manager = new ProductManager(path)
        console.log(await manager.addProduct(article));
        console.log(await manager.upDateProduct(article2))
        console.log(await manager.getProducts());
        console.log(await manager.getProductById(5));
    } catch (error) {
        console.log('El error esta en:', error);
    }
}

prueba()