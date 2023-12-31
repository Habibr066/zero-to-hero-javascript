// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// User input for temperature in Celsius (as a string)
let userInputCelsius = "25";

// Convert the string input to a number
let celsius = Number(userInputCelsius);

// Perform the conversion using the function
let fahrenheit = celsiusToFahrenheit(celsius);

// Display the converted temperature
console.log(`${celsius} degrees Celsius is equal to ${fahrenheit.toFixed(2)} degrees Fahrenheit.`);
