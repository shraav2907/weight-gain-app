require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const User = require('./models/User');
const Meal = require('./models/Meal');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Route to save user data
app.post('/save-user', async (req, res) => {
    try {
        const { weight, height, age, activityLevel, dailyCalories } = req.body;
        const newUser = new User({ weight, height, age, activityLevel, dailyCalories });
        await newUser.save();
        res.json({ message: "User data saved successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to save user data" });
    }
});

// Route to save meal suggestions
app.post('/save-meal', async (req, res) => {
    try {
        const { dailyCalories, mealSuggestion } = req.body;
        const newMeal = new Meal({ dailyCalories, mealSuggestion });
        await newMeal.save();
        res.json({ message: "Meal suggestion saved successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to save meal suggestion" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
