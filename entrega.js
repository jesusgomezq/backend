class ProductManager{
    constructor(products){
        this.products = products
        this.products = []
    }

    getProducts(){
       return  this.products
    }

    

    addProduct(title, description, price, thumbnail, code, stock){

        if(!title || !description || !price || !thumbnail || !code || !stock) {
            console.log('Producto no encontrado');
            return
        }

        if(this.products.find(product => product.code === code)) {
            console.log('El producto ya existe');
            return 
        }
       
        const product ={
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        this.products.length === 0
        ? product.id =1
        : product.id = this.products[this.products.length -1].id +1

        this.products.push(product)
    }

    getProductById(id){
        const compraIndex = this.products.findIndex(product => product.id === id)
        if(compraIndex === -1){
            console.log('Not Found');
            return
        }
        // this.products[compraIndex].product.push(id)
    }  
    
    // removerProducto(product){
    //     const remover = this.products.indexOf(product)
    //     remover !== -1 ? this.products.splice(product, 1) : console.log('Error papa');
    // }
}

const manejador = new ProductManager()
console.log(manejador.getProducts())
manejador.addProduct('Producto de prueba', 'prueba', 200, 'Sin imagen', 'abc123', 25 )
manejador.getProductById(1)
console.log(manejador.getProducts());
manejador.addProduct('Producto de prueba', 'prueba', 200, 'Sin imagen', 'abc123', 25 )
// manejador.addProduct('Producto de prueba', 'prueba', 200, 'Sin imagen', 'abc123', 25 )
manejador.getProductById(2)
// manejador.getProductById(3)