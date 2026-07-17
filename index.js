const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = 3000;

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    
    res.render("client/pages/home/index")
})

app.get('/Products', async (req, res) => {
    const products = await Product.find({});
    console.log(products)
    res.render("client/pages/products/index")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
