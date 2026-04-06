let city = "Banglore";

console.log(city.length);
console.log(city.charAt(7));
console.log(city.repeat(3));
console.log(city.toLocaleLowerCase());
console.log(city.toLocaleUpperCase());
let s1 = "Hello"
console.log(s1.concat(" World"));


let s = "* "
console.log("Pattern 1");
for(let i=0;i<=4;i++){
    console.log(s.repeat(i))
    }

console.log("Pattern 2");
for(let j=5; j>=1;j--){
    console.log(s.repeat(j))
}

console.log("Pattern 3");
let n=5;
for(let k=1;k<=5;k++){
    console.log(" ".repeat(n-k),s.repeat(k));
}




