import express from 'express';
const router = express.Router();

import CourseController from '../app/controllers/CourseController.js';

const courseController = new CourseController();
// newsController.index

router.get('/:slug', courseController.show);

export default router;
