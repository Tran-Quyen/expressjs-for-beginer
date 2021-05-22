const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator'); //slug generator
const mongooseDelete = require('mongoose-delete'); //soft delete lib
// const AutoIncrement = require('mongoose-sequence')(mongoose); // auto increment lib

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
  {
    // idx: { type: Number },// auto increment number Nếu xài nên setup từ đầu tránh bug
    name: { type: String, require: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, require: true },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
  },
  { timestamps: true } //Tự tạo và cập nhật field createdAt và updatedAt
);

// Add plugins
// Use slug
mongoose.plugin(slug);

// Use auto-increment
// CourseSchema.plugin(AutoIncrement, { inc_field: 'idx' });

// Use mongoose-delete
CourseSchema.plugin(mongooseDelete, {
  deletedAt: true, // Add field <deletedAt></deletedAt>
  overrideMethods: 'all', // Override all method in library
});

module.exports = mongoose.model('Course', CourseSchema);
