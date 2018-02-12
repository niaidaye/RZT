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

// news>TradeNews
router.get('/TradeNews-1', (req, res, next) => {
  res.render('news/TradeNews/NewsContent/1.jade',{
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});
router.get('/TradeNews-2', (req, res, next) => {
  res.render('news/TradeNews/NewsContent/2.jade',{
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});
router.get('/TradeNews-3', (req, res, next) => {
  res.render('news/TradeNews/NewsContent/3.jade',{
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});
//
router.get('/Promotion_1', (req, res, next) => {
  res.render('Promotion/index_1',{
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
  res.render('product/CloudVideo/ME90.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});
router.get('/ME90', (req, res, next) => {
  res.render('product/CloudVideo/ME90.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});
//ME60
router.get('/ME40', (req, res, next) => {
  res.render('product/CloudVideo/ME40.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});

router.get('/ME20', (req, res, next) => {
  res.render('product/CloudVideo/ME20.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});

router.get('/NE60', (req, res, next) => {
  res.render('product/CloudVideo/NE60.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});

router.get('/MAXHUB', (req, res, next) => {
  res.render('product/CloudVideo/MAXHUB.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});

router.get('/PJ', (req, res, next) => {
  res.render('product/CloudVideo/PJ.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});

// product>interHardware
router.get('/intel', (req, res, next) => {
  res.render('product/Intel/RZTSD001.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});

// product>interHardaware>SD001
router.get('/RZTSD001', (req, res, next) => {
  res.render('product/Intel/RZTSD001.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});
router.get('/RZTXJ002', (req, res, next) => {
  res.render('product/Intel/RZTXJ002.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});
router.get('/RZTJK001', (req, res, next) => {
  res.render('product/Intel/RZTJK001.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});
router.get('/RZTM91H', (req, res, next) => {
  res.render('product/Intel/RZTM91H.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});
router.get('/RZTT006', (req, res, next) => {
  res.render('product/Intel/RZTT006.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});

// product>tools
router.get('/tools', (req, res, next) => {
  res.render('product/Tools/RZTZA001.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});
router.get('/RZTZA001', (req, res, next) => {
  res.render('product/Tools/RZTZA001.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});
router.get('/RZTYJ', (req, res, next) => {
  res.render('product/Tools/RZTYJ.jade', {
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
router.get('/server_1', (req, res, next) => {
  res.render('serve/server_1.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});
router.get('/server_2', (req, res, next) => {
  res.render('serve/server_2.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});
router.get('/server_3', (req, res, next) => {
  res.render('serve/server_3.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});
router.get('/server_4', (req, res, next) => {
  res.render('serve/server_4.jade', {
    title: '广州荣知通信息科技有限公司',
    pretty: true,
  });
});
router.get('/server_5', (req, res, next) => {
  res.render('serve/server_5.jade', {
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
