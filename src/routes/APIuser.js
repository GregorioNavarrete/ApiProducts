
const express = require ('express');
const router = express.Router();
//controlador de peticiones 
const userController = require ('../controllers/userController');

// get all

router.get('/users', userController.list);
router.get('/users/:id', userController.getOne);


module.exports = router;
