// Closure is the process or method of retaining the outer variable value even after outer value is closed

// Example 1
function outer() {
  let value = 0; // outer variable

  function inner() {
    value++;
    console.log("My value", value);
  }
  return inner;
}

let out = outer();
out();
out();
out();

// Example 2

function teashop() {
  let bill = 0; // outer variable

  return function addBill(price) {
    bill += price;
    console.log("Total bill: ₹" + bill);
  };
}

const myBill = teashop();
myBill(10); // Tea
myBill(20); // Snacks
myBill(15); // coffee


// Example 3

function bankAccount(){
  let balance = 1000;

  return function (amount){
    balance += amount;
    console.log("Balance: ₹" + balance);
  };
}

const account = bankAccount();

account(500);
account(-200);
account(300);