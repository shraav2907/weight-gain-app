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

    document.getElementById("calories-output").innerText = `To gain weight, you should consume approximately ${Math.round(dailyCalories)} doughnuts per day.`;
}
function generateDiet(){
    let meals = ["Apple crumble", "Roast Chicken", "Vegetable Curry", "Ramen", "salad", "Homemade burger", "Peanut Butter and pickle sandwich" ]
    let comparison = ["3 and a half eggs", "A banana milkshake", "A tablespoon of orange juice", "The essence of a cookie", "100g of oxygen", "a 500g salt rock"] 
    let ingredients = ["Fresh Duck", "carrots", "a scoop of sand","mud","fish", "potatos", "2 eggs", "Ripe Mangos", "Apple crumble", "1/7 potatos", "sliced gerkins", "Lentils", "guava", "a red onion", "Miso soup", "probably noodles", "water", "milk", "1/3 of a grain of sugar"]
    let meal_ingredients = getRandomIngredients(ingredients,Math.floor(Math.random() * ingredients.length )+1);

    

    document.getElementById("meal-output").innerText = `Here is an ideal meal: ${meals[Math.floor(Math.random() * meals.length)]} `;
    
    /** 
    document.getElementById("ingredients-output").innerText = `Here is a list of the ingredients you will need:
        -${ingredients[Math.floor(Math.random() * ingredients.length)]}
        -${ingredients[Math.floor(Math.random() * ingredients.length)]}
        -${ingredients[Math.floor(Math.random() * ingredients.length)]} 
        -${ingredients[Math.floor(Math.random() * ingredients.length)]}
        -${ingredients[Math.floor(Math.random() * ingredients.length)]}`; 
        */
    
    function generateDiet() {
        // Create an empty string to hold the formatted list of ingredients
        let ingredientsList = "Here is a list of the ingredients you will need:\n";

        // Loop through the meal_ingredients array and append each item with a bullet point
        for (let i = 0; i < meal_ingredients.length; i++) {
            ingredientsList += `- ${meal_ingredients[i]}\n`;  // Add each ingredient with a bullet point
        }

        // Update the HTML with the formatted list of ingredients
        document.getElementById("ingredients-output").innerText = ingredientsList;
    }
    
    generateDiet() 

    document.getElementById("comparison-output").innerText = `The number of calories is approximately equivelent to: ${comparison[Math.floor(Math.random() * comparison.length)]}`;

   
}
function falseButton(){
    document.getElementById("false-button").innerText = 'This is a fake button'

<<<<<<< HEAD
}
=======
function getRandomIngredients(ingredients, numberOfItems) {
    let randomIngredients = [];

    // Make sure the number of items is less than or equal to the length of the ingredients array
    if (numberOfItems > ingredients.length) {
    
        numberOfItems= 2
    }

    // Pick 'numberOfItems' random elements from the ingredients array
    while (randomIngredients.length < numberOfItems) {
        let randomIndex = Math.floor(Math.random() * ingredients.length);
        let ingredient = ingredients[randomIndex];

        // Avoid duplicates
        if (!randomIngredients.includes(ingredient)) {
            randomIngredients.push(ingredient);
        }
    }

    return randomIngredients;
}

>>>>>>> 78d08519e224de099a13439d0e9ed3da6acf46a7

