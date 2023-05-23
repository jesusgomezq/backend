// import fs from 'fs'

// const path = './files/products.json'

// export default class ProductsManager{
//     consultaDeProducto = async()=>{
//         console.log(fs.existsSync(path));
//         if(fs.existsSync(path)){
//             const data = await fs.promises.readFile(path, 'utf-8')
//             const products = JSON.parse(data)
//             return products
//         }else{
//             return []
//         }
//     }

//     crearProduct = async(info)=>{
//         const products = await this.consultaDeProducto()
//         if(products.length == 0 ){
//             info.id = 1
//         }else{
//             info.id = products[products.length -1].id +1
//         }
//         products.push(info)
//         await fs.promises.readFile(path, JSON.stringify(products, null, '\t'))
//     }

//     removerProduct = async(id)=>{
//         const products = await this.consultaDeProducto()
//         const productoFiltrado = products.filter((products) =>{
//             return products.id != id
//         })
//         await fs.promises.writeFile(path, JSON.stringify(productoFiltrado, null, '\t'))
//     }

//     consultarPorId = async(id)=>{
//         const products = await this.consultaDeProducto()
//         const producstConsultado = products.find((product) =>{
//             return product.id == id
//         }) 
//         return producstConsultado
//     }
// }