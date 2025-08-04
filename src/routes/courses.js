import express from 'express';
const router = express.Router();

import CourseController from '../app/controllers/CourseController.js';

const courseController = new CourseController();
// newsController.index
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);

export default router;
