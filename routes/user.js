var express = require('express');
var router = express.Router();
var models = require('../models/index');
var User = models.User;

router.get('/', function(req, res, next) {
  User.findAll({}).then(function(users){
    res.render('users', { users: users });
  }).catch(next);
});


module.exports = router;
