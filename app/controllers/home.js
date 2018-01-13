const express = require('express');
const router = express.Router();
const Article = require('../models/article');

module.exports = (app) => {
  app.use('/', router);
};

// Index
router.get('/', (req, res, next) => {
  const articles = [new Article(), new Article()];
  res.render('Index/Index', {
    title: '广州荣知通信息科技有限公司',
    articles: articles
  });
});

// news
router.get('/news', (req, res, next) => {
  res.render('news/Index/content_new', {
    title: 'news',
    pretty: true,
  });
});

// news>Promotion
router.get('/Promotion_1', (req, res, next) => {
  res.render('news/Promotion/index_1',{
    title: 'Promotion_1',
    pretty: true,
  });
});
//
router.get('/Promotion_2', (req, res, next) => {
  res.render('news/Promotion/index_2',{
    title: 'Promotion_2',
    pretty: true,
  });
});
// news>TradeNews
router.get('/TradeNews', (req, res, next) => {
  res.render('news/TradeNews/index',{
    title: 'TradeNews',
    pretty: true,
  });
});

// news>CompanyActivity
router.get('/CompanyActivity', (req, res, next) => {
  res.render('news/CompanyActivity/index',{
    title: 'CompanyActivity',
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
