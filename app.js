var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var Twitter = require('twitter');



var app = express();
var client = new Twitter({

		consumer_key: '',
    consumer_secret: '',
    access_token_key :'',
    access_token_secret: ''

});
var util = require('util');

//configure app

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
//use middleware
app.use(bodyParser());
app.use(express.static(path.join(__dirname,'bower_components')));
//define routes
var todoItems = [
{id:1,desc:'Bar'},
{id:2,desc:'Foo'}
];


app.get('/welcome',function(req,res){
//res.send('!!!Hello World');
res.render('index',{
items:todoItems
});
});

app.post('/tweetRouter',function(req,res){




var tweetValue = req.body.tweetType;

if(tweetValue==='One'){
	res.render('needHelp.ejs');

}else {
	res.render('volunteerHelp.ejs');
}


 /*var status = {    status: 'It works!!!.'
  }

     client.post('statuses/update', status, function(error, tweet, response){
    if (!error) {
      console.log(tweet);
     }
   });

res.redirect('/');*/
	 


});


app.post('/submitHelpTweet',function(req,res){
	console.log(' Inside submitHelpTweet');
var areaVal =req.body.areaVal;
var phoneNumber = req.body.phone;
var helpMsg = req.body.tweetContent;

var tweetContent = areaVal.concat('\n\n','PhoneNumber :' +phoneNumber,'\n\n','Message:'+helpMsg);
console.log(tweetContent);


var status = {    status: tweetContent
  }
  client.post('statuses/update', status, function(error, tweet, response){
    if (!error) {
      console.log(tweet);
     }
   });

res.redirect('/welcome');

});

app.listen(1337,function() {
	console.log('Listening in port');



});















/*var http = require('http');
http.createServer(function (req, res){
res.writeHead(200,{'Content-Type': 'text/plain'});
res.end('Hello World\n');

}).listen(1337,'127.0.0.1');
console.log('Server running');*/