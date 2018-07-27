var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function (request, response){
  response.send("<html><head><body><h1>Hello World!!!</h1></body></head></html>")
});

app.get('/api', function(request, response){
  response.json({
    firstName: "John",
    lastName: "Doe"
  });
})


app.listen(port);
