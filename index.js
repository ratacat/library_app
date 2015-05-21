var express = require("express"),
 body = require("body-parser"),
 path = require("path");

app = express();
app.use(bodyParser.urlencoded({etended: true}));

var views = path.join(__dirname, "views");

app.get("/", function(req, res) {
	var homePath = path(views, "home.html");
	res.sendFile(homePath);
});

app.listen(3000, function() {
	console.log("express is");
})