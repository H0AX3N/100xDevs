const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Sandipan:PnZbjl0v21SOrhxO@cluster0.rno05ea.mongodb.net/course-app");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
    role: String,
    _id: ObjectId
});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
});

const adminSchema = new Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
});

const purchaseSchema = new Schema({
    courseId: ObjectId,
    userId: ObjectId
});

const UserModel = mongoose.model('User', userSchema);
const CourseModel = mongoose.model('Course', courseSchema);
const AdminModel = mongoose.model('Admin', adminSchema);
const PurchaseModel = mongoose.model('Purchase', purchaseSchema);

module.exports = {
    UserModel,
    CourseModel,
    AdminModel,
    PurchaseModel
}