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

// console.log("Pattern 2");
for(let j=5; j>=1;j--){
    console.log(s.repeat(j))
}

// console.log("Pattern 3");
let n=5;
for(let k=1;k<=5;k++){
    console.log(" ".repeat(n-k),s.repeat(k));
}

// slice method

let city1 = "Banglore"
console.log(city1.slice(3,6));

// array basics

let arr  = ["Banglore","Manglore","Tumakuru"]

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

// include method

let str = "Banglore is my town";
console.log(str.includes("my"));

// indexof method

let sent = "Banglore is my town";
console.log(str.indexOf("my"));

// split  and join method

let pay = "Pay on time";
console.log(pay.split(" ").join(" "));

// replace method

let ipl = "We have daily match match match";
console.log(ipl.replaceAll("match","cricket"));

//trim 

let town = "Banglore    ";
console.log(town.trim().length);

// JS program to count the occurance of letter e
let data = "I am attending an interviews";
let count1=0;
for(let i=0;i< data.length;i++){
    if(data.charAt(i)==='e'){
        count1++;
    }
}
console.log(count1);

//Using split
let count= 0;
let ar = data.split("");
for(let i=0;i<ar.length;i++){
    if(ar[i]==='e'){
        count++;
    }
}
console.log(count);

//JS program to fing the largest word in input

let arr1=data.split(" ")
let length=0;
let word = "";
for(let i=0;i<arr1.length;i++){
    let length1=arr1[i].length;
    if(length1>length){
        length=length1;
    }
}
console.log("Length of the longest word:",length);

let word1=arr1[0];
for(let j=0;j<arr1.length;j++){
    if(arr1[j].trim().length > word1.length){
        word1=arr1[j];
    }
}
console.log(word1);

