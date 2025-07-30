import express from "express";
const app = express();
const port = 3000;

import route from "./routes/index.js";

// Middleware để xử lý dữ liệu từ form
app.use(express.urlencoded({ extended: true }));

// Cấu hình view engine nếu cần
import { engine } from "express-handlebars";
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", "./src/resources/views");

// home, search, contact

// route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
