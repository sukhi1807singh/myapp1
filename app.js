const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('welcome to the homepage buddy');
});

app.listen(3000, () => {
	console.log("whasssssapppppp");
}) ;

