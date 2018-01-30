const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// ** VERY IMPORTANT ** THIS TELLS THE APP TO USE THE PUBLIC FOLDER FOR ALL STATIC FILES
app.use(express.static(__dirname + "/public"))

app.set('view engine', 'ejs');

require('./config/session.js')(app);
let routes_setter = require('./config/routes.js');
routes_setter(app);


app.listen(port, function() {
  console.log('Listening on', port);
});