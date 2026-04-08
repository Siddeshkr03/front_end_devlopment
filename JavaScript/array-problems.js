// two-sum problem

let arr2 = [1, 2, 3, 4, 5, 6];
let value = 7;
arr3 = [];
for (let i = 0; i < arr2.length; i++) {
  for (let j = 1; j < arr2.length ; j++) {
    if (arr2[i] + arr2[j] == value) {
        arr3.push([i,j]);
    }
  }
}
console.log(arr3);