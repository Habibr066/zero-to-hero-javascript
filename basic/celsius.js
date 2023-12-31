// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Function to handle invalid input
function handleInvalidInput() {
    alert("Please enter a valid number for the temperature.");
}

// Function to handle the conversion and display
function convertTemperature() {
    let userInputCelsius = prompt("Please enter the temperature in Celsius:");

    // Check if the user clicked "Cancel" or entered no value
    if (userInputCelsius === null || userInputCelsius.trim() === "") {
        alert("No input provided. Please enter a temperature.");
        return;
    }

    let celsius = Number(userInputCelsius);

    // Check if the input is a valid number
    if (!isNaN(celsius)) {
        let fahrenheit = celsiusToFahrenheit(celsius);

        // Display the converted temperature to the user
        alert(`${celsius} degrees Celsius is equal to ${fahrenheit.toFixed(2)} degrees Fahrenheit.`);
        console.log(`${celsius} degrees Celsius is equal to ${fahrenheit.toFixed(2)} degrees Fahrenheit.`);
    } else {
        // If the input is not a valid number, show an error message
        handleInvalidInput();
    }
}

// Perform the conversion when the page loads or as required
convertTemperature();

