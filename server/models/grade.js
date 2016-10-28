var mongoose = require('mongoose');

module.exports = mongoose.model('grades', {
	name: String,
	value: String
})