// two-sum problem

function twoSum(arr, value) {
  arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] == value) {
        arr1.push([i, j]);
      }
    }
  }
  console.log(arr1);
}

let arr = [1, 2, 3, 4, 5, 6];
let value = 7;

twoSum(arr, value)

