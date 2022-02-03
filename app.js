const express = require('express');
const app = express();
const configRoute = require('./routes/index');
const dbConnection = require('./db');

const path = __dirname + '/views/';
const port = process.env.PORT || 8080;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(configRoute(dbConnection));

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})
