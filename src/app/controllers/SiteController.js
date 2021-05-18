const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../utils/mongoose');

class SiteController {
  // [GET] /
  index(req, res, next) {
    // render ra Home page và data dạng json
    Course.find({})
      .then((courses) => {
        //use helper because of error security handlebars
        res.render('home', { courses: mutipleMongooseToObject(courses) });
      })
      .catch(next); // <=> .catch(err => next(err));
  }

  // [GET] /search
  search(req, res) {
    // Log on sever: about the query parameter on search
    // url: http://localhost:3000/search?q=QQ%20lap%20trinh&author=Quyen%20Dang
    // console.log(req.query.q);
    res.render('search');
  }
}

module.exports = new SiteController();
