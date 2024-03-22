const express = require ('express');
const router = express.Router();

const apiUsers = require('./APIuser')
const APIRoutes = require ('./APIproduct');//api



//api
router.use('/api', APIRoutes );
router.use('/apiUser', apiUsers );


module.exports = router;