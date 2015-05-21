var express = require("express"),
 body = require("body-parser"),
 path = require("path");

var app = express();
app.use(body.urlencoded({extended: true}));

var views = path.join(__dirname, "views");

app.get("/", function(req, res) {
	var homePath = path.join(views, "home.html");
	res.sendFile(homePath);
});

app.listen(3000, function() {
	console.log("express is");
})