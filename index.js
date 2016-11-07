var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  let a = parseInt(req.query.a);
  let b = parseInt(req.query.b);

  if ( !a )
  {
    a = 0;
  }

  if ( !b )
  {
    b = 0;
  }

  res.send(String(a + b));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});