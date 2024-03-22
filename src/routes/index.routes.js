const express = require ('express');
const router = express.Router();


const APIRoutes = require ('./APIproduct');//api



//api
router.use('/api', APIRoutes );
// router.use('/api', APIRoutes );


module.exports = router;