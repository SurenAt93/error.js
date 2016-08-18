const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const http = require('http');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', function(req, res) {
	res.sendFile('/home/surenat/Documents/simple_node_server/test.html');
});

app.post('/test', function(req, res) {
	console.log(req.body);
	res.send('asdasdasd');
});

const server = http.createServer(app);

server.listen(3000, function() {
  console.log('connect');
});
