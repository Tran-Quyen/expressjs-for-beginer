const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator'); //slug generator
const mongooseDelete = require('mongoose-delete'); //soft delete lib

const Schema = mongoose.Schema;

const Course = new Schema(
  {
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
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
  deletedAt: true, // Add field <deletedAt></deletedAt>
  overrideMethods: 'all', // Override all method in library
});

module.exports = mongoose.model('Course', Course);
