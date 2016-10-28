// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var CitySchema = new Schema({
//   id : {
//     type : Number, required: true
//   },
//   label : {
//     type : String, required: true, trim: true
//   },
//   value : {
//     type :  String, required: true, trim: true
//   }
// });

var mongoose = require('mongoose');

module.exports = mongoose.model('city', {
  label: String,
  value: String
})

// mongoose.model('city', CitySchema);