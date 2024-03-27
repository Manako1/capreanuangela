// Helper function to calculate the factorial of a number
function calculateFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * calculateFactorial(number - 1);
    }
}

// Helper function to display the result
function displayResult(factorial) {
    console.log("The factorial is: " + factorial);
}

// Main function to use the helper functions
function main() {
    // Number for which factorial will be calculated
    var num = 5;

    // Calculate the factorial
    var factorial = calculateFactorial(num);

    // Display the result
    displayResult(factorial);
}

// Call the main function to run the program
main();
