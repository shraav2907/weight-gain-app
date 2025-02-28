const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    weight: Number,
    height: Number,
    age: Number,
    activityLevel: Number,
    dailyCalories: Number
});

module.exports = mongoose.model('User', UserSchema);
