import express from 'express';
const router = express.Router();

import SiteController from '../app/controllers/SiteController.js';

const siteController = new SiteController();
// newsController.index

router.get('/search', siteController.search);
router.get('/', siteController.index);

export default router;
