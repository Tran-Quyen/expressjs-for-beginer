const newsRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  // Routing
  // Local host --- Hosting
  // Action ---> Dispatcher ---> Function handler
  app.use("/news", newsRouter);

  app.use("/", siteRouter);

  // app.post("/search", (req, res) => {
  //   // get param from Form Data
  //   console.log(req.body);

  //   res.render("search");
  // });
}

module.exports = route;
