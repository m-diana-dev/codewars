const bmi = (weight, height) => {
    let bmi = weight / (height * height);
    switch (true) {
        case bmi <= 18.5:
            return "Underweight"
            break;
        case bmi <= 25.0:
            return "Normal";
            break;
        case bmi <= 30.0:
            return "Overweight"
            break;
        case bmi > 30.0:
            return "Obese"
            break;
    }
}
