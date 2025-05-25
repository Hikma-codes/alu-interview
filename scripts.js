Dupliate in Array
function hasDuplicate(arr) {
    const seen = new Set();
    for (let value of arr) {
      if (seen.has(value)) return true;
      seen.add(value);
    }
    return false;
  }

  Sorting
  const arr = [3, 1, 4, 2];
arr.sort((a, b) => a - b);
console.log(arr); // [1, 2, 3, 4]

reverseString
function reverseString(str) {
    return str.split('').reverse().join('');
  }

  LargestNumber
  function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }