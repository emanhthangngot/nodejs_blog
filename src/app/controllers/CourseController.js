import Course from '../models/Course.js';

class CourseController {
    create(req, res) {
        res.render('courses/create');
    }

    store(req, res) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch(() => res.status(400).send('Lưu khóa học thất bại'));
    }

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
