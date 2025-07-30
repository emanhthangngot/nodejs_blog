import Course from '../models/Course.js';

class SiteController {
    // [GET] /
    async index(req, res) {
        try {
            const courses = await Course.find({});
            res.json(courses);
            // Or: res.render('home', { courses });
        } catch (err) {
            res.status(400).json({ error: 'Error!!!' });
        }
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

export default SiteController;
