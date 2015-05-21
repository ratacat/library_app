var mongoose = require("mongoose");

var bcrypt = require("bcrypt");

var confirm = function (pswrd, pswrdCon) {
	return pswrd === pswrdCon;
};

userSchema.statics.createSecure = function(params, cb){
	var isConfirmed;

	isConfirmed = confirm(params.password,password_confirmation);

	if (!isConfirmed) {
		return cb("Password should Match", null);
	}

	var that = this;

	bcrypt.hash(pswrd, 12, function(err,hash) {
		params.password_digest = hash;
		that.create(params, cb);
	});
};

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