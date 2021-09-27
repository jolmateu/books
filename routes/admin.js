const path =  require('path');

const express = require('express');

const rootDir = require('../util/path')

const router = express.Router();

const books = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  })
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  books.push({title: req.body.title, price: req.body.price, rating: req.body.rating});
  res.redirect('/');
});

exports.routes = router;
exports.books = books;