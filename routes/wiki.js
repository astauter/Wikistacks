var express = require('express');
var router = express.Router();
var models = require('../models/index');
var Page = models.Page;
var User = models.User;

router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.post('/', function(req, res, next) {
  res.send('got to POST /wiki/');
});

router.post('/add', function(req, res, next) {
  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  var page = Page.build({
    title: req.body.title,
    content: req.body.content,
    status: req.body.status
  });

  // var User = User.build({
  //   name: req.body.name,
  //   email : req.body.email,
  // });

  // STUDENT ASSIGNMENT:
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise or it can take a callback.
  page.save();
  res.json(page);
  // -> after save -> res.redirect('/');

});

router.get('/add', function(req, res, next) {
  res.render('addpage',{});
});

module.exports = router;
