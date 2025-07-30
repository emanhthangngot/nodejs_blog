import express from 'express';
const router = express.Router();

import NewsController from '../app/controllers/NewsController.js';

const newsController = new NewsController();
// newsController.index

router.get('/:slug', newsController.show);
router.get('/', newsController.index);

export default router;
