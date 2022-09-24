

// Requiring modules
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const ejs = require('ejs');
var fs = require('fs');
const port = 8000;

app.get('/', function (req, res) {

	// Render page using renderFile method
	ejs.renderFile('./home.ejs', {},
		{}, function (err, template) {
		if (err) {
			throw err;
		} else {
			res.end(template);
		}
	});
});

// Server setup
app.listen(port, function (error) {
	if (error)
		throw error;
	else
		console.log("Server is running");
});
