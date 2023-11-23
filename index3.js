function mapFilter(array, callback) {
    const result = [];
  
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
  
    return result;
  }

  const numbers = [1, 2, 3, 4, 5];

// Using mapFilter to double each number
const doubledNumbers = mapFilter(numbers, (current) => current * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]