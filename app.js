var express = require('express');

//var socket = require('socket.io');
//var app = express();
//var io = socket.listen(app);

//Socket.IO compatibility Express 2.x to 3.x
var app = express()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server);

server.listen(8080);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function(client) {
    console.log('Client connected...');
    client.emit('news', { hello: 'world' });
    client.on('my other event', function (data) {
      console.log(data);
    });
});