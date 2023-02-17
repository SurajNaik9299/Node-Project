const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const expressHbs = require("express-handlebars");
const errorController = require('./controllers/error');

const app = express();
// We telling express we want to compile dynamic components using pug engine.

app.set("view engine", "ejs");
//and where to find these templates
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
app.use(bodyParser.urlencoded({ extended: false }));

//Providing read access
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
// const server = http.createServer(app);
// const server = http.createServer(routes.handler);

app.listen(3000);
