const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');

let expression = '';  // Store the entire expression the user inputs

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === '=') {
      try {
        expression = eval(expression);  // Evaluate the entire expression
        screen.value = expression;
      } catch (error) {
        screen.value = 'Error';  // Display error for invalid expressions
        expression = '';  // Reset expression
      }
    } else {
      expression += value;  // Append the clicked button value to expression
      screen.value = expression;
    }
  });
});

clearButton.addEventListener('click', () => {
  expression = '';  // Clear the expression
  screen.value = '';  // Clear the display
});
