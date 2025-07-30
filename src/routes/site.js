import express from "express";
const router = express.Router();

import SiteController from "../app/controllers/SiteController.js";

const siteController = new SiteController();
// newsController.index

router.use("/search", siteController.search);
router.use("/", siteController.index);

export default router;
