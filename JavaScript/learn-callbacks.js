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

function OrderFood(callback) {
  setTimeout(() => {
    console.log("Ordering the food");
    callback();
  }, 6000);
}

function PreparingFood(callback) {
  setTimeout(() => {
    console.log("Preparing the food");
    callback();
  }, 5000);
}

function findingDeliveryPartner(callback) {
  setTimeout(() => {
    console.log("Finding Delivery Partner");
    callback();
  }, 4000);
}

function OutForDeliver(callback) {
  setTimeout(() => {
    console.log("Out for delivery");
    callback();
  }, 4500);
}

function FoodDelivered() {
  setTimeout(() => {
    console.log("Food Delivered");
  }, 2000);
}

// OrderFood();
// PreparingFood();
// findingDeliveryPartner();
// OutForDeliver();
// FoodDelivered();

OrderFood(() => {
  PreparingFood(() => {
    findingDeliveryPartner(() =>{
        OutForDeliver(()=>{
            FoodDelivered()
        })
    })
  })
});

