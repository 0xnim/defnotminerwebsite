const express = require(`express`);
const fs = require(`fs`);
const fetch = require(`cross-fetch`);
const env = require(`dotenv`).config({ path: '.env' });
const http = require(`http`);
const https = require(`https`);
const { body,validationResult } = require('express-validator');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })





const app = express()
const port = 3000


app.use(express.static(__dirname + '/public'));
app.set(`view engine`, `ejs`)

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/submit', urlencodedParser, function(req, res)
{
	message ={
		uname:req.query.uname,
		};
			   console.log(message);
			   res.end(JSON.stringify(message));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
