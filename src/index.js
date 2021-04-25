const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const app = express();
const port = 3000;

// Auto go to index.js file
const route = require("./routes");

// Set static folder for public/img
app.use(express.static(path.join(__dirname, "public")));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// XMLHttpRequest, fetch, axios, ajax, ...

// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Routes init
route(app);

// Listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
