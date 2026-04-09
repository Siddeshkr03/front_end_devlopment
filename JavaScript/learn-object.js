// Object is collection of data that holds the key-value pair

let obj = {
    name:"Virat",
    age: 20,
}
console.log(obj);
console.log(typeof(obj));

console.log(obj.name);
console.log(obj.age);

console.log(obj["name"]);
console.log(obj["age"]);

obj.salary = 10000;
console.log(obj.salary);

obj.city = "Banglore"
console.log(obj);

// delete an object

delete obj.salary;
console.log(obj);

// to get the keys
console.log(Object.keys(obj));

//to get the values
console.log(Object.values(obj));

// to get the key-value pairs
console.log(Object.entries(obj));


// Nested object
let obj2 = {
  address: {
    city: "Bengaluru",
    state: "Karnataka",
  },
};
console.log(obj2);


// array of objects
 
let mobile = [
    {name:"Iphone 17", brand:"Apple", country:"USA"},
    {name: "Galaxy", brand: "Samsung", country: "Korean"},
    {name: "Nord series", brand:"One Plus", country: "China"},
    {name: "Iphone 16", brand:"Apple", country: "USA"},
]

for (let key in mobile) {
  if(mobile[key].brand=="Apple"){
    console.log(mobile[key]);
  }
}
