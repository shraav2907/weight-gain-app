const mongoose = require('mongoose');

const MealSchema = new mongoose.Schema({
    dailyCalories: Number,
    mealSuggestion: String
});

module.exports = mongoose.model('Meal', MealSchema);
