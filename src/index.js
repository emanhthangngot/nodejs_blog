import express from "express";
import morgan from "morgan";
import { create } from "express-handlebars";

const app = express();
const port = 3000;

app.use(express.static("src/public"));

// HTTP logger
app.use(morgan("combined"));

// Template engine setup
const hbs = create({
  extname: ".hbs",
  helpers: {
    foo() {
      return "FOO!";
    },
    bar() {
      return "BAR!";
    },
  },
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "src/resources/views");

// Route
app.get("/", (req, res) => {
  res.render("home", {
    showTitle: true,
  });
});

app.get("/news", (req, res) => {
  res.render("news", {
    showTitle: true,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
