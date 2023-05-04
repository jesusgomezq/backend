class ProductManager{
    constructor(){
        this.products = []
        this.productoId = 0
    }

    getProducts(){
       return  this.products
    }

    

    addProduct(title, description, price, thumbnail, code, stock){

        if(!(title && description && price && thumbnail && code && stock)) {
            console.log('Error producto no existente, ingrese un valor valido');
            return
        }

        if(this.products.some(product => product.code === code)) {
            console.log('Error: el producto ya existe');
            return 
        }
       
        const product ={
            id: ++this.productoId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        this.products.push(product)
    }

    getProductById(id){
        const product = this.products.find(product => product.id === id)
       if(!product){
        console.log(`Error: el producto con el id ${id} no existe`);
        return
       }
       return product
        
    }  
    

}

const manejador = new ProductManager()
manejador.addProduct('producto prueba 1', 'producto prueba', 200, 'sin titulo', 'abc123', 20)
console.log(manejador.getProducts())