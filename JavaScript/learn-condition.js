// if condition example

let score = 120;

if(score > 100){
    console.log("I have a century in the stats");
    
}

// if-else statement

let age = 19;

if ( age>18){
    console.log("Eligible for voting"); 
}else{
    console.log("Not eligible for voting");
}

// if-else-if

let team = 'RCB';

if(team === 'RCB'){
    console.log("Ee sala cup namdhe");
}else if(team === 'CSK'){
    console.log("Thala for a reason");
}else if(team === 'MI'){
    console.log("Rohith sharma");
}else{
    console.log("I am Vijay Malya");
}

// switch statement
let order = "paid";

switch(order){
    case "ordered": console.log("Order placed");
                    break;
    case "paid": console.log("Payment Done");
                    break;
    case "dispatch": console.log("Order dispatched");
                    break;
    case "out": console.log("Out for delivery");
                    break;
    case "delivered": console.log("Order Successfully Delievered");
                        break;
    default: console.log("Product not servicable");
}

// switch example two

let amount = 3000

switch(true){
    case amount>5000:
        console.log("VIP/ Premium customer");
        break;
    case amount >2000:
        console.log("Give 20% discount");
        break;
    default:console.log("Shop more to get discount");
}