
const express = require ('express');
const router = express.Router();
//controlador de peticiones 
const productController = require ('../controllers/productController');

// get all

router.get('/products', productController.list);
router.get('/products/:id', productController.getOne);


module.exports = router;
