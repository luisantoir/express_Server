const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index.js');

router.get('/', indexController.index);

router.get('/products', indexController.getProducts);

router.post('/newProduct', indexController.addProduct);

module.exports = router;