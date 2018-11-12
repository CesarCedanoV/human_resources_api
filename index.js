const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./modules/Employee');
require('./modules/Role');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Human Resources Managment API');
});

require('./routes/employeeRoutes')(app);
require('./routes/roleRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
