const path =  require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const books = adminData.books;
  res.render('shop', {
    bks: books,
    pageTitle: 'Shop',
    path: '/',
    hasBooks: books.length > 0,
    activeShop: true,
    booksCSS: true
  });
});

module.exports = router;