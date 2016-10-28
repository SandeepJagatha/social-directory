var mongoose = require('mongoose');

module.exports = mongoose.model('states', {
	name: String,
	abbreviation: String
})



// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var StateSchema = new Schema({
//   id : {
//     type : Number, required: true
//   },
//   name : {
//     type : String, required: true, trim: true
//   },
//   abbreviation : {
//     type :  String, required: true, trim: true
//   }
// });

// mongoose.model('state', StateSchema);





// var mongoose = require('mongoose')
//   , Schema = mongoose.Schema
//   , ObjectId = Schema.ObjectId;

// module.exports = mongoose.model('users', {
// 	id: Number,
// 	firstName: String,
// 	lastName: String,
// 	address: String,
// 	rating: String,
// 	url: String,
// 	currentrating: String
// })



// module.exports = mongoose.model('areas', {
// 	name: String,
// 	value: String
// })

// module.exports = mongoose.model('sorttypes', {
// 	name: String,
// 	value: String
// })

// module.exports = mongoose.model('subjects', {
// 	name: String,
// 	values: String
// })

// module.exports = mongoose.model('states', {
// 	name: String,
// 	abbreviation: String
// })


// module.exports = mongoose.model('cities', {
// 	label: String,
// 	value: String
// })


// var StateSchema = new Schema({
//   id : {
//     type : Number, required: true
//   },
//   abbreviation : {
//     type : String, required: true, trim: true
//   },
//   name : {
//     type :  String, required: true, trim: true
//   }
// });


// exports.StateSchema = StateSchema;
// module.exports = mongoose.model('State', StateSchema);

