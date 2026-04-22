// swiggy example

// Order the food
// Prepare food
// Finding a delivery partner
// Out for delivery
// Food is delivered

function OrderFood(){
    return new Promise((resolve, reject) => {
        let response = true;

        setTimeout(() => {
            if(response) {
                resolve("Food order has been done");
            }
            else{
                reject("Food is not available at the moment")
            }
        }, 6000);
    })
}

function PreparingFood(){
    return new Promise((resolve, reject) => {
        let response = true;

        setTimeout(() => {
            if(response) {
                resolve("Food is being prepared");
            }
            else{
                reject("Food is not able to prepare at the moment")
            }
        }, 5000);
    })
}

function findingDeliveryPartner(){
    return new Promise((resolve, reject) => {
        let response = true;

        setTimeout(() => {
            if(response) {
                resolve("Finding the delivery partner");
            }
            else{
                reject("Unable to find delivery partner");
            }
        }, 4000);
    })
}

function OutForDelivery(){
    return new Promise((resolve, reject) => {
        let response = true;

        setTimeout(() => {
            if(response) {
                resolve("Food is out for delivery");
            }
            else{
                reject("Food is not available at the moment")
            }
        }, 3000);
    })
}

function FoodDelivered(){
    return new Promise((resolve, reject) => {
        let response = true;

        setTimeout(() => {
            if(response) {
                resolve("Food delivered successfully");
            }
            else{
                reject("Food not delivered")
            }
        }, 4000);
    })
}

OrderFood().then((message) => {
    console.log("message one: ", message);
    return PreparingFood();
    })
    .then((message) => {
        console.log("message two: ", message);
        return findingDeliveryPartner();
    })
    .then((message) => {
        console.log("message three: ", message);
        return OutForDelivery();
    })
    .then((message) => {
        console.log("message four: ", message);
        return FoodDelivered();
    })
    .then((message) => {
        console.log("message five: ", message);
    })
    .catch((error) => {
        console.log("Error -> ", error); 
    });

console.log(typeof(Promise));

