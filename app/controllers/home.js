const express = require('express');
const router = express.Router();
const Article = require('../models/article');

module.exports = (app) => {
  app.use('/', router);
};

// index
router.get('/', (req, res, next) => {
  const articles = [new Article(), new Article()];
  res.render('index/index', {
    title: '广州荣知通信息科技有限公司',
    articles: articles
  });
});

// about
router.get('/about', (req, res, next) => {
  res.render('blog/about', {
    title: 'Node-Blog About',
    pretty: true,
  });
});

// contact
router.get('/contact', (req, res, next) => {
  res.render('blog/contact', {
    title: 'Node-Blog Contact',
    pretty: true,
  });
});
