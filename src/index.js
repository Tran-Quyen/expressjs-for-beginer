const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const SortMiddleware = require('./app/middlewares/SortMiddleware');

const app = express();
const port = 3000;

// Auto go to index.js file
const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

// Set static folder for public/img
app.use(express.static(path.join(__dirname, 'public')));

// Middleware built-in
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Custom Middleware
// SortMiddleware
app.use(SortMiddleware);

// Middleware example (Người soát vé vui tính)
app.get(
  '/middleware',
  (req, res, next) => {
    // 3 tham số nhận về req,res,next là tên do chúng ta đặt (Chỉ cần nhớ vai trò của các tham số đó là gì )
    // req: request object
    // res: response object
    // next: callback function
    console.log(next);

    // req.query.ve => vethuong <=> uri: /middleware?ve=vethuong
    // req.params.id => 10 <=> uri: /middleware/10 ('/middleware/:id')
    if (['vethuong', 'vevip'].includes(req.query.ve)) {
      return next(); //sang middleware kế tiếp nếu k0 có sẽ bị treo browser cho đến khi timeout
    }

    //Khi k0 được passed
    res
      .status(403)
      .json({ status: res.statusCode, message: 'Middleware 1: Access denied! (Need ticket)' });
  },
  // ...more middleware
  (req, res, next) => {
    // Ve vip thi next
    if ('vevip' == req.query.ve) {
      req.face = 'VIP ticket passed'; //tạo ra 1 biến face và có value là 'passed' (req cũng là object nên làm được điều này)
      return next();
    }
    //Khi k0 được passed
    res.status(404).json({
      status: res.statusCode,
      message: 'Middleware 2: Access denied! (Need vip ticket)',
    });
  },
  // Middleware End Point:
  (req, res, next) => {
    res.status(200).json({
      status: res.statusCode,
      message: 'Middleware End Point: Passed Successfully!!',
      face: req.face,
    });
  }
);

// Helper for use put and delete methods
app.use(methodOverride('_method'));

// XMLHttpRequest, fetch, axios, ajax, ...

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
      sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : 'default';

        const icons = {
          default: 'oi oi-elevator',
          asc: 'oi oi-sort-ascending',
          desc: 'oi oi-sort-descending',
        };

        const types = {
          default: 'desc',
          asc: 'desc',
          desc: 'asc',
        };

        const icon = icons[sortType];
        const type = types[sort.type];

        return `<a href='?_sort&column=${field}&type=${type}'>
           <span class='${icon}'></span>
         </a>`;
      },
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
