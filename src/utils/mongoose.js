// Solve security handlebars problem by using mongoose function toObject
// toObject use to convert from object constructor (class) to object literal
// Helper
const mutipleMongooseToObject = (mongooses) => {
  return mongooses.map((mongoose) => mongoose.toObject());
};

const mongooseToObject = (mongoose) => (mongoose ? mongoose.toObject() : mongoose);

module.exports = {
  mutipleMongooseToObject,
  mongooseToObject,
};
