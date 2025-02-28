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
    let meals = ["Apple crumble", "Roast Chicken", "Vegetable Curry", "Ramen", "salad", "Hommade burger", "Peanut Butter and pickle sandwich" ]
    let comparison = ["3 and a half eggs", "A banana milkshake", "A tablespoon of orange juice", "The colour green", "a 500g salt rock"] 
    let ingredients = ["Fresh Duck, carrots, fish, potatos and an egg", "Ripe Mangos, Apple crumble, potatos, sliced gerkins", "Lentils, guava, a red onion", "Miso soup, probably noodles, water, milk"]

    
    document.getElementById("meal-output").innerText = `Here is an ideal meal :`;
 


}

