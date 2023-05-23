import express from "express";
import ProductsManager from "./ProductsManager.js";

const app = express()

const ProductManager = new ProductsManager()


app.get('/products', async (req, res) => {
    const limit = req.query.limit
    const products = await ProductManager.getProducts()
    if (limit) {
        const limitOfProducts = products.slice(0, limit)
        res.send(limitOfProducts)
    } else {

        res.send(products)
    }
})

app.get('/products/:id', async (req, res) => {
    const id = req.params.id
    const products = await products.getProductById(number(id))
    if (products) {
        res.send(products)
    } else {
        res.send('Producto no encontrado')
    }
})

app.listen(8080, () => {
    console.log('Servidor levanatdo');
})
