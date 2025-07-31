import Course from '../models/Course.js';

class CourseController {
    async show(req, res) {
        try {
            const course = await Course.findOne({
                slug: req.params.slug,
            }).lean();
            if (!course) {
                return res.status(404).send('Course not found');
            }
            res.render('courses/show', { course });
        } catch (err) {
            res.status(500).send('Server error');
        }
    }
}

export default CourseController;
