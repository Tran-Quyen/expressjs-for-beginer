const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');

const app = express();
const port = 3000;

// Auto go to index.js file
const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

// Set static folder for public/img
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Helper for use put and delete methods
app.use(methodOverride('_method'));

// XMLHttpRequest, fetch, axios, ajax, ...

// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

// Listen
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
