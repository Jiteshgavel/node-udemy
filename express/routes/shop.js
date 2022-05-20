const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();
const adminData = require('./admin');

router.get('/',(req, res, next) => {
   const products = adminData.products;
    // res.sendFile(path.join(rootDir, 'view','shop.html'));
    res.render('shop', { prods: products, pageTitle:' shop ',path:'/'});
});

module.exports = router;