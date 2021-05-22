const SortMiddleware = (req, res, next) => {
  // Tạo 1 biến locals trong res (chỉ tồn tại trong res mỗi lần)
  res.locals._sort = {
    enabled: false,
    type: 'default',
  };

  if (req.query.hasOwnProperty('_sort')) {
    // res.locals._sort.enabled = true;
    // res.locals._sort.type = req.query.type;
    // res.locals._sort.column = req.query.column;

    // merge vào res.locals._sort thay cho cú pháp trên
    Object.assign(res.locals._sort, {
      enabled: true, //Mới sẽ ghi đè
      type: req.query.type,
      column: req.query.column, //Chưa có sẽ thêm
    });
  }

  next();
};

module.exports = SortMiddleware;
