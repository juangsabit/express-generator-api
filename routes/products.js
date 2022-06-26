var express = require('express');
var validator = require('fastest-validator');
var router = express.Router();

const {Product} = require('../models')

const v = new validator()

router.get('/', async(req,res) => {
    const products = await Product.findAll()
    return res.json(products).status(200)
})

router.get('/:id', async(req,res) => {
    const id = req.params.id
    const products = await Product.findByPk(id)
    if(!products) return res.json({message:"data not found"}).status(400)
    res.json(products).status(200)
})

router.post('/', async(req, res) => {
    const schema = {
        name:'string',
        brand:'string',
        price:'number',
        description:'string|optional',
    }
    const validate = v.validate(req.body, schema)
    if(validate.length) {
        return res.
        status(400).
        json(validate)
    }
    const product = await Product.create(req.body)
    res.json(product).status(200)
})


router.put('/:id', async (req, res) => {
    const id = req.params.id
    let product = await Product.findByPk(id)
    if(!product){
        return res.json({message:"product not found"})
    }
    const schema = {
        name:'string|optional',
        brand:'string|optional',
        price:'number|optional',
        description:'string|optional',
    }
    const validate = v.validate(req.body, schema)
    if(validate.length) {
        return res.
        status(400).
        json(validate)
    }
    product = await product.update(req.body)
    res.json(product)
})

router.delete('/:id', async(req, res) => {
    const id = req.params.id
    let product = await Product.findByPk(id)

    if(!product){
        return res.json({message:"product not found!"})
    }

    await product.destroy()
    res.json({message:"product success deleted!"})

})


module.exports = router;
