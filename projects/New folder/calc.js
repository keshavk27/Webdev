// Insert numbers and operators into the display
function insert(value) {
    document.getElementById("display").value += value;
}

// Clear the entire display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Delete the last character in the display
function deleteLast() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}

// Calculate the entered expression
function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

// Calculate square root
function sqrt() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = Math.sqrt(currentValue);
}

// Handle trigonometric functions
function trigFunction(func) {
    let currentValue = document.getElementById("display").value;
    let radians = currentValue * (Math.PI / 180); // Convert degrees to radians
    if (func === 'sin') {
        document.getElementById("display").value = Math.sin(radians);
    } else if (func === 'cos') {
        document.getElementById("display").value = Math.cos(radians);
    } else if (func === 'tan') {
        document.getElementById("display").value = Math.tan(radians);
    }
}

// Handle keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;
    const display = document.getElementById("display");

    // Numbers (0-9) and basic operations
    if (!isNaN(key) || ['+', '-', '*', '/', '%', '.'].includes(key)) {
        insert(key);
    }
    
    // Handling Enter (=) and Backspace (DEL)
    if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    }
    
    // Handling special keys
    if (key === 'c' || key === 'C') {
        clearDisplay();  // Clear display on pressing 'C'
    }
});
