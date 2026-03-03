function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let result = document.getElementById("result");

    if (weight === "" || height === "") {
        result.innerHTML = "Please enter both weight and height.";
        return;
    }

    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    result.innerHTML = "Your BMI is " + bmi + " (" + category + ")";
}