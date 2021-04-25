class SiteController {
  // [GET] /
  index(req, res) {
    res.render("home");
  }

  // [GET] /search
  search(req, res) {
    // Log on sever: about the query parameter on search
    // url: http://localhost:3000/search?q=QQ%20lap%20trinh&author=Quyen%20Dang
    // console.log(req.query.q);
    res.render("search");
  }
}

module.exports = new SiteController();
