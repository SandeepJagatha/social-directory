var Cities = require('../models/city');
var Sorttypes = require('../models/sorttypes');
var State = require('../models/state');
var Area = require('../models/area');
var User = require('../models/user');
var Subject = require('../models/subject');
var Grade = require('../models/grade');
// var db = require('../accessDB')
//   , util = require('util');


module.exports.sorttypeslist = function(req, res){
	Sorttypes.find({}, function(err,results){
		res.json(results);
	});
}
module.exports.citylist = function(req, res){
	Cities.find({}, function(err,results){
		res.json(results);
	});
}
module.exports.statelist = function(req, res){
    State.find({}, function(err,results){
        res.json(results);
    });
}
module.exports.arealist = function(req, res){
    Area.find({}, function(err,results){
        res.json(results);
    });
}
module.exports.userlist = function(req, res){
    User.find({}, function(err,results){
        res.json(results);
    });
}
module.exports.subjectlist = function(req, res){
    Subject.find({}, function(err,results){
        res.json(results);
    });
}
module.exports.gradelist = function(req, res){
    Grade.find({}, function(err,results){
        res.json(results);
    });
}


// // GET
// exports.states = function (req, res) {
//     console.log('*** states');
//     db.getStates(function (err, states) {
//         if (err) {
//             console.log('*** states err');
//             res.json({
//                 states: states
//             });
//         } else {
//             console.log('*** states ok');
//             res.json(states);
//         }
//     });
// };

// // GET
// exports.cities = function (req, res) {
//     console.log('*** cities');
//     db.getStates(function (err, cities) {
//         if (err) {
//             console.log('*** cities err');
//             res.json({
//                 cities: cities
//             });
//         } else {
//             console.log('*** cities ok');
//             res.json(cities);
//         }
//     });
// };
