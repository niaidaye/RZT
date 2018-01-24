const express = require('express');
const router = express.Router();
const Article = require('../models/article');

module.exports = (app) => {
  app.use('/', router);
};

// Index
router.get('/', (req, res, next) => {
  const articles = [new Article(), new Article()];
  res.render('index/index', {
    title: '广州荣知通信息科技有限公司',
    articles: articles
  });
});

// news
router.get('/news', (req, res, next) => {
  res.render('news/Index/content_new', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});

// news>Promotion
router.get('/Promotion_1', (req, res, next) => {
  res.render('news/Promotion/index_1',{
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});
//
router.get('/Promotion_2', (req, res, next) => {
  res.render('news/Promotion/index_2',{
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});
// news>TradeNews
router.get('/TradeNews', (req, res, next) => {
  res.render('news/TradeNews/index',{
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});

// news>CompanyActivity
router.get('/CompanyActivity', (req, res, next) => {
  res.render('news/CompanyActivity/index',{
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});

// product
router.get('/product', (req, res, next) => {
  res.render('product/main.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});

// product>video
router.get('/cloudvideo', (req, res, next) => {
  res.render('product/CloudVideo/cloudvideo.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});

// serve
router.get('/serve', (req, res, next) => {
  res.render('serve/server_1.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});

// about
router.get('/about', (req, res, next) => {
  res.render('about/main.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});

// abour>company
router.get('/company', (req, res, next) => {
  res.render('about/profile/CProfile.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});

// about>friend
router.get('/friend', (req, res, next) => {
  res.render('about/friend/friend.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});

// about>JoinUs
router.get('/JoinUs', (req, res, next) => {
  res.render('about/JoinUs/join_us.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});
