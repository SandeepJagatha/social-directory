var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	app = express(),
	kleoscontroller = require('./server/controller/kleos-controller');
    // DB = require('./accessDB');


// mongoose.connect('mongodb://localhost:27017/kleos');

// //Local Connection
// var conn = 'mongodb://localhost/customermanager';
// var db = new DB.startup(conn);

app.use(express.static(__dirname + ''));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//REST API
app.get('/api/cities', kleoscontroller.citylist);
app.get('/api/sorttypes', kleoscontroller.sorttypeslist);
app.get('/api/state', kleoscontroller.statelist);
app.get('/api/area', kleoscontroller.arealist);
app.get('/api/users', kleoscontroller.userlist);
app.get('/api/subjects', kleoscontroller.subjectlist);
app.get('/api/grades', kleoscontroller.gradelist);





// // JSON API
// var baseUrl = '/api/dataservice/';

// //REST API
// app.get(baseUrl + 'Cities', api.cities);
// app.get(baseUrl + 'Sortingtypes', api.sortingtypes);


app.listen(3000, function(){
	console.log('I\'m Listening...');
});
