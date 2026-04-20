// Callback
// a callback is simply a function passed as an argument to another function, which is then executed later.
// callback is a way to handle asynchronous programming

// Use of callback: to handle asynchronous programming in a synchronous way

function one(callback){ // we can use any word inplace of callback
    setTimeout(() => {
        console.log("Function one");
        callback;   
    }, 3000);
}

function two(){
    setTimeout(() => {
        console.log("Function two");   
    }, 1000);
}

one(two());

// swiggy example

// Order the food
// Prepare food
// Finding a delivery partner
// Out for delivery
// Food is delivered
