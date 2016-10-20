
var express = require('express') ;
var app = express() ;
var bodyParser = require('body-parser') ;
var mongoose = require('mongoose') ;
var methodOverride = require('method-override') ;
var logger = require('morgan') ;
var cookieParser = require('cookie-parser') ;
var http = require('http') ;
var fs = require('fs') ;
var hbs = require('express-hbs') ;

var port = process.env.PORT || 3000 ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extented : true})) ;
app.use(cookieParser()) ;
app.use(logger('dev')) ;
app.use(express.static(__dirname+'/public')) ;

app.get('/',function(req,res){
	res.sendFile(__dirname + '/public/index.html') ;
});
app.get('/check',function(req,res){
	var bool = req.param('bool') ;
	res.send(bool) ;
	console.log(bool) ;
	var check ;
	if(bool === "off")
		check = "true" ;
	else
		check = "false" ;
	fs.writeFile(__dirname + '/public/data.txt',check,function(err){
		if(err)
			console.log(err) ;
		else
			console.log("Data written successfuly") ;
	})

})



app.listen(port) ;

module.exports = app ;

