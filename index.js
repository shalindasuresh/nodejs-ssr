

// Requiring modules
const express = require('express');
const app = express();
//Let express app to know we use ejs template for render frontend
app.set('view engine', 'ejs');
const ejs = require('ejs');;
//Use port number 8000
const port = 8000;

app.get('/', function (req, res) {

	// Render page using renderFile method
	ejs.renderFile('./home.ejs', {},
		{}, function (err, template) {
		if (err) {
			//Throw errors if rendering ejs failed
			throw err;
		} else {
			res.end(template);
		}
	});
});

// Our app is started and listening on port 8000
app.listen(port, function (error) {
	if (error)
		throw error;
	else
		console.log("Server is running");
});
