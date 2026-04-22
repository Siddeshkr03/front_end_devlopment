let mobile = [
  { name: "iphone", brand: "Apple", country: "USA" },
  { name: "galaxy", brand: "Samsung", country: "Korea" },
  { name: "poco", brand: "MI", country: "China" },
  { name: "iphone", brand: "Apple", country: "US" },
];

// filter method

let filteredData = mobile.filter((value) => value.brand != "Apple");
console.log(filteredData);

// map method

let mapData = mobile.map((value) => console.log("value data", value));
console.log(mapData);

// reduce method -> Add the values in the array

let scores = [72, 65, 92, 35, 90];

let final = scores.reduce((acc, value) => acc + value, 0); // 0 -> accumulator initial value
console.log("Total score: ", final);

mobile = [
  { name: "iphone", brand: "Apple", price: 100000, country: "USA" },
  { name: "galaxy", brand: "Samsung", price: 30000, country: "Korea" },
  { name: "poco", brand: "MI", price: 20000, country: "China" },
  { name: "iphone", brand: "Apple", price: 80000, country: "US" },
];

let iphonevalue = mobile.reduce((acc, value) => {
  if (value.brand == "Apple") {
    return acc + value.price;
  }

  return acc;
}, 0);

console.log("Iphone value: ", iphonevalue);

let totalvalue = mobile.reduce((acc, value) => acc + value.price, 0);
console.log("Total Price: ", totalvalue);

// example

let transaction = [
  { status: "FAILED", product: "Iphone", value: 2000 },
  { status: "SUCCESS", product: "Earbuds", value: 1000 },
  { status: "FAILED", product: "Charger", value: 200 },
  { status: "SUCCESS", product: "Shoes", value: 3000 },
  { status: "FAILED", product: "Phone", value: 1000 },
  { status: "SUCCESS", product: "Tv", value: 10000 },
];

let failedvalue = transaction.reduce((acc, val) => {
  if (val.status == "FAILED") {
    return acc + val.value;
  }
  return acc;
}, 0);

console.log(failedvalue);
