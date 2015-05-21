var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
	email: {
		type: String,
		lowercase: true,
		required: true,
		index: {
			unique: true
		}
	},
	passwordDigest: {
		type: String,
		required: true
	},
	first_name: {
		type: String,
		default: ""
	},
	last_name: {
		type: String,
		default: ""
	}
});

var User = mongoose.model("User",userSchema);
module.exports = User;