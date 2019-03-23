//npm install express
//npm install ejs

var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.render('index',{})
});

app.listen(3000);