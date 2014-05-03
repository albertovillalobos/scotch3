
// load mongoose
var mongoose = require('mongoose');

// create todo model
module.exports = mongoose.model ('Todo', {
	text: String,
	done: Boolean
});