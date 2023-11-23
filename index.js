// Custom mineFilter function
function mineFilter(array, callback) {
  const filteredArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {     //here is no requiredment of idx i and array
      filteredArray.push(array[i]);
    }
  }

  return filteredArray;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];

// Using mineFilter to filter even numbers
const evenNumbers = mineFilter(numbers, (num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6]