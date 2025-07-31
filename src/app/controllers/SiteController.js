import Course from '../models/Course.js';

class SiteController {
    // [GET] /
    async index(req, res) {
        try {
            const courses = await Course.find({}).lean(); // trả về plain object, Handlebars sẽ truy cập được các thuộc tính như name, image, description mà không báo lỗi bảo mật
            res.render('home', { courses });
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
