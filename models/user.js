const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    email: String,
    status: String,
    password: String
});

mongoose.model('users', userSchema);