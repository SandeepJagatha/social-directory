var mongoose = require('mongoose');

module.exports = mongoose.model('users', {
	id: Number,
	firstName: String,
	lastName: String,
	address: String,
	rating: String,
	url: String,
	currentrating: String
})