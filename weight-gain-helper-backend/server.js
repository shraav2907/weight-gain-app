const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fitnessDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));

// Define User Schema
const userSchema = new mongoose.Schema({
    weight: Number,
    height: Number,
    age: Number,
    activityLevel: Number,
    dailyCalories: Number
});

const User = mongoose.model('User', userSchema);

// Define Meal Schema
const mealSchema = new mongoose.Schema({
    dailyCalories: Number,
    mealSuggestion: String
});

const Meal = mongoose.model('Meal', mealSchema);

// Route to save user data
app.post('/save-user', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.json({ message: 'User data saved', user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to save meal suggestion
app.post('/save-meal', async (req, res) => {
    try {
        const newMeal = new Meal(req.body);
        await newMeal.save();
        res.json({ message: 'Meal suggestion saved', meal: newMeal });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
