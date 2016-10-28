var mongoose = require('mongoose');

module.exports = mongoose.model('areas', {
	name: String,
	value: String
})