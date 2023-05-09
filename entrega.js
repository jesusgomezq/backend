// importamos fs
import fs from 'fs'

const path = './archivo/products.json'

// Creamos la clase ProductManager con su respectivo constructor

export default class ProductManager {
    // constructor() {
    //     this.products = []
    //     this.productoId = 0
    // }

    // En este punto hacemos el llamado a nuestros productos
    getProducts = async () => {
        if (fs.existsSync()) {
            const data = await fs.promises.readFile(path, 'utf-8')
            console.log(data);
            const products = JSON.parse(data)
            return products
        } else {
            return []
        }
    }


    // Hacemos un addProduct para agregar prodctos
    addProduct(title, description, price, thumbnail, code, stock) {

        // Hacemos una validacion para que el producto ver si el producto existe 
        if (!(title && description && price && thumbnail && code && stock)) {
            console.log('Error producto no existente, ingrese un valor valido');
            return
        }

        // Haremos que el producto no se repita
        if (this.products.some(product => product.code === code)) {
            console.log('Error: el producto ya existe');
            return
        }
        // Hacemos el objeto de nuestro producto 
        const product = {
            id: ++this.productoId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        // Agregamos todo producto que sea nuevo 
        this.products.push(product)
    }

    // funcion para eliminar algun producto da la lista 
    removeProduct(product) {
        const index = this.products.indexOf(product)
        if (index === -1) {
            console.log('Error: el producto no se encuentra en la lista.')
            return
        }
        this.products.splice(index, 1)
    }
}
// Agregamos productos por su id 
getProductById = async (articulo) => {
    const articulo = await this.addProduct()
    if (articulo.length == 0) {
        articulo.id = 1
    } else {
        articulo.id = products[product.leng - 1].id + 1
    }
    products.push(articulo)
    await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'))
    return articulo

    //     // Validamos que el id del producto no se repita 
    //    if(!product){
    //     console.log(`Error: el producto con el id ${id} no existe`);
    //     return
    //    }
    //    return product

}  

const manejador = new ProductManager()
const prueba = async () => {
    let consulta1 = await manejador.getProducts()
    console.log(consulta1);

    let article = {
        nombre: 'Tramontina',
        modelo: 'Cacerola',
        codigo: 2343,
        año: 2023
    }

    let result = await manejador.getProducts(article)
    console.log(result);
}
// manejador.addProduct('producto prueba 1', 'producto prueba', 200, 'sin titulo', 'abc123', 20)
// console.log(manejador.getProducts()) 
prueba()