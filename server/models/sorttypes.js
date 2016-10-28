// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var SorttypeSchema = new Schema({
//   id : {
//     type : Number, required: true
//   },
//   name : {
//     type : String, required: true, trim: true
//   },
//   value : {
//     type :  String, required: true, trim: true
//   }
// });

// mongoose.model('sorttypes', SorttypeSchema);


var mongoose = require('mongoose');

module.exports = mongoose.model('sorttypes', {
	name: String,
	value: String
})