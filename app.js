const express = require('express')
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path')



nunjucks.configure('views', {noCache: true})
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')))
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(bodyParser.json());
