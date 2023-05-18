import express from "express";
import ProductsManager from "./clases/ProductManager.js";

const app = express()

const ProductManager = new ProductsManager()
app.get('/products', async (req, res)=>{
    const products = await ProductManager.consultaDeProducto()
    res.send(products)
})

app.listen(8080, ()=>{
    console.log('Servidor levanatdo');
})