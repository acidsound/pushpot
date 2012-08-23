
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express.createServer();

var port = process.env.VCAP_APP_PORT || 3000;
app.configure(function(){
  app.set("jsonp callback", true); // for JSONP callback. if you use 3.x express, delete this
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// for CORS
var preprocessorCORS=function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
};

app.all('/', preprocessorCORS);
app.all('/:uuid', preprocessorCORS);

app.get('/', routes.index);
app.post('/', routes.index);
app.get('/get/:uuid', routes.read);
app.get('/:uuid', routes.index);
app.post('/:uuid', routes.index);
app.listen(port, function() {
  console.log("Express server listening on port " + port);
});
