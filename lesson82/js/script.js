// Task 1
function greetings(name) {
  return 'Hello ' + name + '!'
}
console.log(greetings('Alex'))

// Task 2
const numbers = [0.5, 34, 2, 0, 13, 53, -4, 900]

function moreThanTen(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 10){
      console.log(array[i])
    } 
  }
}
console.log(moreThanTen(numbers))

// Task 3
function calculator(firstNumber, operator, secondNumber){
  if (operator == 'minus'){
    return firstNumber - secondNumber
  }
  else if (operator == 'plus'){
    return firstNumber + secondNumber
  }
  else if(operator == 'multiply'){
    return firstNumber * secondNumber
  }
  else if (operator == 'divide'){
    return firstNumber / secondNumber
  }
  else{
    return 'Please enter correct operator.'
  }
}

console.log(calculator(23, 'minus', 5))
console.log(calculator(23, 'plus', 36))
console.log(calculator(23, 'multiply', 100))
console.log(calculator(23, 'divide', 0))