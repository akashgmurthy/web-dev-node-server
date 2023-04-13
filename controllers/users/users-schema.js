import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    avatar: String,
    bannerColor: String,
    numEventsAttended: Number,
    numEventsHosted: Number,
}, {collection: 'users'});
export default userSchema