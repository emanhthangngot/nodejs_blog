import mongoose from 'mongoose';
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/education_product');
        console.log('Connect Successfully!!');
    } catch (error) {
        console.log('Connect Failed!!');
    }
}

export default connect;
