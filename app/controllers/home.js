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

// product
router.get('/product', (req, res, next) => {
  res.render('product/main.jade', {
    title: 'Node-Blog Contact',
    pretty: true,
  });
});

// serve
router.get('/serve', (req, res, next) => {
  res.render('serve/server_1.jade', {
    title: 'Node-Blog Contact',
    pretty: true,
  });
});

// about
router.get('/about', (req, res, next) => {
  res.render('about/main.jade', {
    title: 'Node-Blog Contact',
    pretty: true,
  });
});

// abour>company
router.get('/company', (req, res, next) => {
  res.render('about/profile/CProfile.jade', {
    title: 'Node-Blog Contact',
    pretty: true,
  });
});

// about>friend
router.get('/friend', (req, res, next) => {
  res.render('about/friend/friend.jade', {
    title: 'Node-Blog Contact',
    pretty: true,
  });
});
