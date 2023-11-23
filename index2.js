function mineReduce(array, callback, initialValue) {
    if (array.length === 0 && initialValue === undefined) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
  
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
   
    //  accumulator = initialValue !== undefined ? initialValue : 0;
    //  startIndex = initialValue !== undefined ? 0 : 0;     //or startIndex = 0;
   

    for (let i = startIndex; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
  
    return accumulator;
  }

  const numbers = [1, 2, 3, 4, 5];

// Using mineReduce to sum the numbers
const sum = mineReduce(numbers, (accumulator, current) => accumulator + current, 0);

console.log(sum); // Output: 15


