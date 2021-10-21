const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}));

app.listen(5000, () => {
	console.log('App listens on port: ', 5000);
})