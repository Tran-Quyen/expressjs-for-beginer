const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../utils/mongoose');

class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    let courseQuery = Course.find({});

    if (req.query.hasOwnProperty('_sort')) {
      courseQuery = courseQuery.sort({
        [req.query.column]: req.query.type,
      });
    }

    // Promise.all return array of result all Promise
    Promise.all([courseQuery, Course.countDocumentsDeleted()])
      .then(([courses, deleteCount]) => {
        res.render('me/stored-courses', {
          deleteCount, // Count Document Deleted
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  // [GET] me/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) =>
        res.render('me/trash-courses', {
          courses: mutipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
