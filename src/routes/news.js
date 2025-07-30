import express from "express";
const router = express.Router();

import NewsController from "../app/controllers/NewsController.js";

const newsController = new NewsController();
// newsController.index

router.use("/:slug", newsController.show);
router.use("/", newsController.index);

export default router;
