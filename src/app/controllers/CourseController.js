const Course = require('../models/Course');
const { mongooseToObject } = require('../../utils/mongoose');

class CourseController {
  // [GET] /courses/:slug
  show(req, res, next) {
    const slug = req.params.slug;

    Course.findOne({ slug: slug })
      .then((course) => res.render('courses/show', { course: mongooseToObject(course) }))
      .catch(next);
  }

  // [GET] courses/create
  create(req, res, next) {
    res.render('courses/create');
  }

  // [GET] courses/:id/edit
  edit(req, res, next) {
    const { id } = req.params;
    Course.findById(id)
      .then((course) => res.render('courses/edit', { course: mongooseToObject(course) }))
      .catch(next);
  }

  // [PUT] /courses/:id
  update(req, res, next) {
    const { id } = req.params;
    const data = req.body;

    Course.updateOne({ _id: id }, data)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }

  // [DELETE] /courses/:id
  destroy(req, res, next) {
    const { id } = req.params;

    // Sử dụng soft delete với lib (trong db sẽ thêm trường deleted: true)
    Course.delete({ _id: id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  // [DELETE] /courses/:id/force
  forceDestroy(req, res, next) {
    const { id } = req.params;

    // Xóa thật trong mongodb
    Course.deleteOne({ _id: id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  // [PATCH] /courses/:id/restore
  restore(req, res, next) {
    const { id } = req.params;

    // Sử dụng soft delete với lib (trong db sẽ thêm trường deleted: true)
    Course.restore({ _id: id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  // [POST] courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;

    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);

    // res.send('COURSE SAVED!');
  }

  // [POST] /courses/handle-form-actions
  handleFormActions(req, res, next) {
    const action = req.body.action;
    const listCourseIds = req.body.courseIds;

    switch (action) {
      case 'delete':
        // Xóa khóa học mà có _id nằm trong listCourseIds
        Course.delete({ _id: { $in: listCourseIds } })
          .then(() => res.redirect('back'))
          .catch(next);
        break;
      default:
        res.json({ message: 'Action invalid!!!' });
    }
  }
}

module.exports = new CourseController();
