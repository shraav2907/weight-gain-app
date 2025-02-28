function calculateCalories() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let age = parseInt(document.getElementById("age").value);
    let activityLevel = parseFloat(document.getElementById("activity").value);

    if (isNaN(weight) || isNaN(height) || isNaN(age) || activityLevel === NaN) {
        alert("Please fill in all fields lscorrectly.");
        return;
    }

    // Calculate BMR (Basal Metabolic Rate) using the Mifflin-St Jeor Equation
    let bmr = 10 * weight + 6.25 * height - 5 * age + 5;  // For men
    // For women, use: let bmr = 10 * weight + 6.25 * height - 5 * age - 161;

    // Calculate TDEE (Total Daily Energy Expenditure)
    let tdee = bmr * activityLevel;

    // To gain weight, aim for a caloric surplus (adding ~500 calories)
    let dailyCalories = tdee + 500;

    document.getElementById("calories-output").innerText = `To gain weight, you should consume approximately ${Math.round(dailyCalories)} calories per day.`;
}
function generateDiet(){
    let meals = ["Apple crumble", "Roast Chicken", "Vegetable Curry", "Ramen", "salad", "Homemade burger", "Peanut Butter and pickle sandwich" ]
    let comparison = ["3 and a half eggs", "A banana milkshake", "A tablespoon of orange juice", "The essence of a cookie", "100g ofoxygen", "a 500g salt rock"] 
    let ingredients = ["Fresh Duck", "carrots", "a scoop of sand","mud","fish", "potatos", "2 eggs", "Ripe Mangos", "Apple crumble", "1/7 potatos", "sliced gerkins", "Lentils", "guava", "a red onion", "Miso soup", "probably noodles", "water", "milk", "1/3 of a grain of sugar"]
    let meal_ingredients = []

    

    document.getElementById("meal-output").innerText = `Here is an ideal meal: ${meals[Math.floor(Math.random() * meals.length)]} `;
    document.getElementById("ingredients-output").innerText = `Here is a list of the ingredients you will need:
        -${ingredients[Math.floor(Math.random() * ingredients.length)]}
        -${ingredients[Math.floor(Math.random() * ingredients.length)]}
        -${ingredients[Math.floor(Math.random() * ingredients.length)]} 
        -${ingredients[Math.floor(Math.random() * ingredients.length)]}
        -${ingredients[Math.floor(Math.random() * ingredients.length)]}`;
    document.getElementById("comparison-output").innerText = `The number of calories is approximately equivelent to: ${comparison[Math.floor(Math.random() * comparison.length)]}`;

   
}
function falseButton(){
    document.getElementById("false-button").innerText = 'This is a fake button'

}

