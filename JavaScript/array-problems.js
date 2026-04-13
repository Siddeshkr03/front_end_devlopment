// Program to find anagram

function is_anagram(str1,str2){
    let value1 = str1.split("").sort().join("");
    let value2 = str2.split("").sort().join("");

    if(value1==value2){
        console.log("Anagram");
    }
    else{
        console.log("Not an anagram");
    }
}

is_anagram("abc","bac");

// Program to check palindrome(using reverse method)

let word1 = "aba".split("")
let word2 = word1.reverse()

if (word1===word2){
    console.log("palindrome");
}
else{
    console.log("not a palindrome");

}

// without reverse method

// function isPalindrome(str) {
  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    if (str.charAt(l) !== str.charAt(r)) {
      return "not a palindrome";
    }
    l++;
    r--;
  }
  return "palindrome";

console.log(isPalindrome("aabaa"));

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

// Program to count number of vowels

let data = "Hello web";

let arrv = data.split("");
let vow = ["a", "e", "i", "o", "u"];
let count = 0;
for(i=0;i<arrv.length;i++){
  for(j=0;j<vow.length;j++)
    if(arrv[i].includes(vow[j])){
      count++;
      console.log(arrv[i]);
    }
}
console.log("Length:"+count);

// remove duplicates from array

let arrd = [1,2,2,3,3,5,4,4,6,7,8,8,8]
let arrnd = []

for(let i = 0;i<arrd.length;i++){
  if(!arrnd.includes(arrd[i])){
    arrnd.push(arrd[i])
  }
}
console.log(arrnd);

// using indexOf() method

let arrd1 = [1,2,2,3,3,5,4,4,6,7,8,8,8]
let arrnd1 = []

for(let i = 0;i<arrd1.length;i++){
  if(arrnd1.indexOf(arrd1[i]) == -1){
    arrnd1.push(arrd1[i])
  }
}
console.log(arrnd1);


//find the largest num in array
let arr2 = [100, 200, 350, 120, 140];
let max = arr[0];

for(let i = 0;i<arr2.length;i++){
  if(arr2[i+1]>prevmax){
    max = arr2[i+1];
    }
  }
console.log(prevmax);

// to find the frequency of each letters

let c = "Bengaluru";
let dict = {}

for(let i= 0; i<c.length;i++){
  if(Object.keys(dict).includes(c.charAt(i))){
    dict[c.charAt(i)] +=1;
  }
  else{
    dict[c.charAt(i)] =1;
  }
}
console.log(dict);

// other appraoch
let c1 = "Bengaluru";
let dict1 = {}

for(i=0;i<c1.length;i++){
  if(dict1[c1[i]]){
    dict1[c1[i]]+=1;
  }
  else{
    dict1[c1[i]]=1;
  }
}

console.log(dict1);

