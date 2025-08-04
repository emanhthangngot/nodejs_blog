import mongoose from 'mongoose';
import slugUpdater from 'mongoose-slug-updater';

mongoose.plugin(slugUpdater);

const Schema = mongoose.Schema;
const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        image: { type: String },
        videoID: { type: String, required: true },
        level: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true }, // slug tự động từ name
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Course', Course);
