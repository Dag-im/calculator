document.addEventListener('DOMContentLoaded', function () {
  const expressionDisplay = document.getElementById('expression')
  const resultDisplay = document.getElementById('result')
  const keysWindow = document.getElementById('keysWindow')

  let expression = ''
  let result = '0'

  // Function to calculate factorial
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1
    } else {
      let fact = 1
      for (let i = 2; i <= n; i++) {
        fact *= i
      }
      return fact
    }
  }

  // Function to extract last number from expression
  function extractLastNum(exp) {
    const numbers = exp.match(/\d+/g)
    return numbers ? numbers[numbers.length - 1] : null
  }

  // Function to evaluate the expression
  function calcResult() {
    if (expression.length !== 0) {
      try {
        let compute = eval(expression)
        compute = parseFloat(compute.toFixed(4))
        result = compute
        resultDisplay.textContent = result
      } catch (error) {
        result = 'An Error Occurred!'
        resultDisplay.textContent = result
      }
    } else {
      result = 'An Error Occurred!'
      resultDisplay.textContent = result
    }
  }

  // Event listener for button clicks
  keysWindow.addEventListener('click', function (event) {
    const buttonValue = event.target.textContent

    if (buttonValue === 'AC') {
      expression = ''
      expressionDisplay.textContent = ''
      result = '0'
      resultDisplay.textContent = result
    } else if (buttonValue === 'DEL') {
      expression = expression.slice(0, -1)
      expressionDisplay.textContent = expression
    } else if (buttonValue === '=') {
      calcResult()
    } else if (buttonValue === '!') {
      const lastNum = extractLastNum(expression)
      if (lastNum != null) {
        const num = parseFloat(lastNum)
        expression += '!'
        expressionDisplay.textContent = expression
        result = factorial(num)
        resultDisplay.textContent = result
      }
    } else {
      expression += buttonValue
      expressionDisplay.textContent = expression
    }
  })
})
