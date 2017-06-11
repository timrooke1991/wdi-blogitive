const express = require('express');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');
const routes = require('./config/routes');
const customResponses = require('./lib/customResponses');
const authentication = require('./lib/authentication');
// const errorHandler = require('./lib/errorHandler');
const { secret, port, dbURI } = require('./config/environment');
const app = express();

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));

app.use(session({
  secret,
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

app.use(customResponses);

// body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// methodOverride
app.use(methodOverride(function (req) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(authentication);
app.use(routes);
//app.use(errorHandler);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
