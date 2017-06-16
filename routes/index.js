var express = require('express');
var router = express.Router();
const wikiRouter = require('./wiki.js');
const userRouter = require('./user.js');

router.use('/wiki', wikiRouter);
router.use('/user', userRouter);

router.get('/', function(req, res, next){
    res.render('index')
})

module.exports = router;
