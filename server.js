//require express
var results = [];
var express = require('express');
//path module -- try to figure out where and why we use this
var path = require ('path');
var bodyParser = require('body-parser');
//create the express app
var app = express();
app.use(bodyParser.urlencoded());
// console.log(app);
//static content
app.use(express.static(path.join(__dirname, "./static")));
//setting up ejs and our views folder
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');
//root route to render the index.ejs view
app.get('/', function(req, res){
	res.render('index');
})
//post route for adding a user
app.post('/info', function(req,res){
console.log('POST DATA', req.body);
results.push(req.body)
console.log('Results', results);
//This is where you would add the user to the database
//Then redirect to the root route
res.render('result', {users: req.body, info: results});
})
//tell the express app to listen on port 8000
app.listen(8888, function(){
	console.log('listening on port 8888');
})