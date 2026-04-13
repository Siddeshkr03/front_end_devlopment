// while
let value = 1;

while(value <=5){
    console.log(value);
    value++;
}

// do-while

let value2 = 1;

do{
    console.log(value2);
    value2++;
}while(value2 <= 10);

// for loop

for(let value3=0;value3<5;value3++){
    console.log("counting loop",value3);
}

// for-in loop -> used specifically for objects

let obj={
    name:"Virat",
    age:20,
    salary: 10000,
}

for(let key in obj){
    console.log(`key : ${key}, Value: ${obj[key]}`);
    
}

// for-of loop -> this is used for arrays

let score = [65,78,43,75,90,100]

for(let num of score){
    if(num>=75){
        console.log("It a distinction");
    }
}


