// Why Promise?
// to avoid callback hell, in async programming
// new concept was introduced which is called a Promise

// What is promise? 
// Promise is a JS object that will resolve or reject the operation or some code execution

let getChocolate = new Promise((resolve, reject) => {
    let isResponse = true;
    setTimeout(() => {
        if(isResponse){
            resolve("getting the chocolate");
        }else{
            reject("failed with a promise")
        }
    }, 3000);
})

getChocolate.then((message)=> {
    console.log("result",message);
}).catch((error) => {
    console.log(error); 
});