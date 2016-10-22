var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/', express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/index.html');
});

app.post('/recipe-add', (req, res) => {
	console.log('got a post req!\n', req.body);
	res.send('successful!');
});

app.post('/register', (req, res) => {
	console.log('got a post req for new account!\n', req.body);
	res.send('successful!');
});

app.listen(3000, function () {
  console.log('Food Geek server listening on port 3000!');
});