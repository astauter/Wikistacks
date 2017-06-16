const express = require('express')
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');
const models = require('./models/index.js');
const router = require('./routes/index')


app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {
  noCache: true
});
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/', router);

models.db.sync({
    force: true
  })
  .then(function() {
    app.listen(1337, function() {
      console.log('listening on 1337');
    });
  }).catch(console.err);
