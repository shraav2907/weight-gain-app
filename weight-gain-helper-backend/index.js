// index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000; // The port for the backend server

app.use(cors());
app.use(express.json()); // For parsing JSON

// Connect to MongoDB (replace with your own MongoDB URI)
mongoose.connect('mongodb://localhost:27017/weight-gain-helper', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected!'))
.catch(err => console.log('MongoDB connection error: ', err));

// MongoDB Schema for storing user data
const userSchema = new mongoose.Schema({
    weight: Number,
    height: Number,
    age: Number,
    activityLevel: Number,
    dailyCalories: Number
});

const User = mongoose.model('User', userSchema);

// Route to save user data to MongoDB
app.post('/save-user', async (req, res) => {
    const { weight, height, age, activityLevel, dailyCalories } = req.body;

    try {
        const newUser = new User({
            weight,
            height,
            age,
            activityLevel,
            dailyCalories
        });

        await newUser.save();
        res.status(200).json({ message: 'User data saved successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Error saving user data', error: err });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
