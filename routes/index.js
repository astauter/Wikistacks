var express = require('express');
var router = express.Router();
const wikiRouter = require('./wiki.js');
const userRouter = require('./user.js');
var models = require('../models/index')
var Page = models.Page;

router.use('/wiki', wikiRouter);
router.use('/user', userRouter);

router.get('/', function(req, res, next){
    var pages = Page.findAll({})
    .then(function(pages){
      res.render('index', {pages: pages});
    });
});

module.exports = router;
