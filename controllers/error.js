exports.get404 = (req, res, next) => {
  // resrender(path.join(__dirname,'views','404.html'));
  res.status(404).render("404", { pageTitle: "Page not found", path: "" });
};
