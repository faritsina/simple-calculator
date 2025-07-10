
        // Declaring variables
        let number1 = 0;
        let number2 = 0;
        let selectedOperation = '+';
        let calculationResult = 0;
        
        // Getting DOM elements
        const num1Input = document.getElementById('num1');
        const num2Input = document.getElementById('num2');
        const operationSelect = document.getElementById('operation');
        const calculateButton = document.getElementById('calculateBtn');
        const clearButton = document.getElementById('clearBtn');
        const resultDisplay = document.getElementById('result');
        
        // Function to add two numbers
        function addNumbers(a, b) {
            return a + b;
        }
        
        // Function to subtract two numbers
        function subtractNumbers(a, b) {
            return a - b;
        }
        
        // Function to multiply two numbers
        function multiplyNumbers(a, b) {
            return a * b;
        }
        
        // Function to divide two numbers
        function divideNumbers(a, b) {
            if (b === 0) {
                return 'Cannot divide by zero';
            }
            return a / b;
        }
        
        // Main calculation function
        function performCalculation() {
            // Type conversion: converting string input to numbers
            number1 = parseFloat(num1Input.value) || 0;
            number2 = parseFloat(num2Input.value) || 0;
            selectedOperation = operationSelect.value;
            
            // Performing arithmetic with operators
            switch(selectedOperation) {
                case '+':
                    calculationResult = addNumbers(number1, number2);
                    break;
                case '-':
                    calculationResult = subtractNumbers(number1, number2);
                    break;
                case '*':
                    calculationResult = multiplyNumbers(number1, number2);
                    break;
                case '/':
                    calculationResult = divideNumbers(number1, number2);
                    break;
                default:
                    calculationResult = 'Invalid operation';
            }
            
            // Manipulating the DOM to display result
            updateDisplay(calculationResult);
        }
        
        // Function to update the display
        function updateDisplay(value) {
            if (typeof value === 'number') {
                resultDisplay.textContent = value.toFixed(2).replace(/\.?0+$/, '');
            } else {
                resultDisplay.textContent = value;
            }
        }
        
        // Function to clear all inputs and result
        function clearCalculator() {
            num1Input.value = '';
            num2Input.value = '';
            operationSelect.value = '+';
            number1 = 0;
            number2 = 0;
            calculationResult = 0;
            updateDisplay(0);
        }
        
        // Event listeners
        calculateButton.addEventListener('click', performCalculation);
        clearButton.addEventListener('click', clearCalculator);
        
        // Allow Enter key to calculate
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                performCalculation();
            }
        });
    </script>
</body>
</html>
 <script>
        // Declaring variables
        let number1 = 0;
        let number2 = 0;
        let selectedOperation = '+';
        let calculationResult = 0;
        
        // Getting DOM elements
        const num1Input = document.getElementById('num1');
        const num2Input = document.getElementById('num2');
        const operationSelect = document.getElementById('operation');
        const calculateButton = document.getElementById('calculateBtn');
        const clearButton = document.getElementById('clearBtn');
        const resultDisplay = document.getElementById('result');
        
        // Function to add two numbers
        function addNumbers(a, b) {
            return a + b;
        }
        
        // Function to subtract two numbers
        function subtractNumbers(a, b) {
            return a - b;
        }
        
        // Function to multiply two numbers
        function multiplyNumbers(a, b) {
            return a * b;
        }
        
        // Function to divide two numbers
        function divideNumbers(a, b) {
            if (b === 0) {
                return 'Cannot divide by zero';
            }
            return a / b;
        }
        
        // Main calculation function
        function performCalculation() {
            // Type conversion: converting string input to numbers
            number1 = parseFloat(num1Input.value) || 0;
            number2 = parseFloat(num2Input.value) || 0;
            selectedOperation = operationSelect.value;
            
            // Performing arithmetic with operators
            switch(selectedOperation) {
                case '+':
                    calculationResult = addNumbers(number1, number2);
                    break;
                case '-':
                    calculationResult = subtractNumbers(number1, number2);
                    break;
                case '*':
                    calculationResult = multiplyNumbers(number1, number2);
                    break;
                case '/':
                    calculationResult = divideNumbers(number1, number2);
                    break;
                default:
                    calculationResult = 'Invalid operation';
            }
            
            // Manipulating the DOM to display result
            updateDisplay(calculationResult);
        }
        
        // Function to update the display
        function updateDisplay(value) {
            if (typeof value === 'number') {
                resultDisplay.textContent = value.toFixed(2).replace(/\.?0+$/, '');
            } else {
                resultDisplay.textContent = value;
            }
        }
        
        // Function to clear all inputs and result
        function clearCalculator() {
            num1Input.value = '';
            num2Input.value = '';
            operationSelect.value = '+';
            number1 = 0;
            number2 = 0;
            calculationResult = 0;
            updateDisplay(0);
        }
        
        // Event listeners
        calculateButton.addEventListener('click', performCalculation);
        clearButton.addEventListener('click', clearCalculator);
        
        // Allow Enter key to calculate
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                performCalculation();
            }
        });
