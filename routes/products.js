const express=require('express')
const router=express.Router()
const productController=require('../controllers/productControllers')
router.get('/', productController.getProducts)
router.get('/form', productController.getProductForm)
router.post('/', productController.postproducts)

router.get('/:id', productController.getProductById)

router.put('/:id',productController.putproducts)
router.delete('/:id',productController.deleteproducts)
module.exports=router