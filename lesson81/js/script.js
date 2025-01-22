console.log('Task 1:')

const numbers = [830, 4, 99, 8653, 69, 498, 385]

for(let i = 0; i < numbers.length; i++){
  if(numbers[i] % 2 == 0){
    console.log(numbers[i])
  }
}

console.log('Task 2:')

const rainbow = ['red', 'orange', 'yellow', 'green', 'light blue', 'blue', 'purple']

for (i = rainbow.length - 1; i >= 0; i--) {
  console.log(rainbow[i])
}