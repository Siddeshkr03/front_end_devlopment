// type conversion

/* Two types
1. Implicit
2. Explicit
*/

// Implicit conversion

console.log("5" + 1);
console.log(5 + 3 + "abcd" + 5 + 1); // (8abcd51) -> Implicit coversion
// During addition integer followed by a string converted into String

// During sub, multiplication, division String converted into Integer
console.log("5"-1);
console.log("5"*1);
console.log(1 + true); //-> 2
console.log("1" + true); //-> 1true

if("hello"){
    console.log("true statement");
}else{
    console.log("False statement");
}

if(""){
    console.log("true statement");
}else{
    console.log("False statement");
}

// Explicit conversion

// String, Boolean, Number

console.log(String(true));
console.log(String(123));

console.log(Number("123"));
console.log(Boolean(""));
console.log(Boolean("123"));
console.log(Boolean(123));