const express = require('express');
const mongoose = require('mongoose');
var morgan = require('morgan'); 
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/Employee');
require('./models/Role');
require('./models/Group');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Human Resources Managment API');
});

require('./routes/employeeRoutes')(app);
require('./routes/roleRoutes')(app);
require('./routes/groupRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
