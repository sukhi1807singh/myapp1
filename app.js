const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Welcome to New Deployment');
});

const port = process.env.port || 3000;
app.listen(port, () => {
	console.log("whasssssapppppp");
}) ;

