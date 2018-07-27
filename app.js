var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.get('/', function (request, response){
  response.send("<html><head><body><h1>Hello World!!!</h1></body></head></html>")
});

app.get('/middleware', function (request, response){
  response.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello with middleware!!!</h1></body></html>')
});

app.get('/person/:id', function(request, response){
  response.send("<html><head><body><h1>Person: " + request.params.id + "</h1></body></head></html>")
})

app.get('/api', function(request, response){
  response.json({
    firstName: "John",
    lastName: "Doe"
  });
});

app.listen(port);
