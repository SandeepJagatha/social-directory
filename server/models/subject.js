var mongoose = require('mongoose');

module.exports = mongoose.model('subjects', {
	name: String,
	value: String
})