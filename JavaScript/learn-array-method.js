let arr = ["Bengaluru", "Tumakuru", "Mysore", "Udupi"];

// push -> adds the element to the last
arr.push("Hassan");
console.log(arr);

// pop -> removes the element from the last
console.log(arr.pop());
console.log(arr);

// shift -> removes the first element of an array
// unshift -> adds the element to the front

arr.unshift("Hassan");
console.log(arr);

arr.shift()
console.log(arr);

// sort method
arr.sort()
console.log(arr);

//reverse method
arr.reverse()
console.log(arr);

// Program to fing anagram

function is_anagram(str1,str2){
    let value = str1.split("").sort().join("");
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
//   let l = 0;
//   let r = str.length - 1;

  while (l < r) {
    if (str.charAt(l) !== str.charAt(r)) {
      return "not a palindrome";
    }
    l++;
    r--;
  }
  return "palindrome";

console.log(isPalindrome("aabaa"));



