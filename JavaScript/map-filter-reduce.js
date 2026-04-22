let mobile = [
    {name: "iphone", brand: "Apple", country: "USA"},
    {name: "galaxy", brand: "Samsung", country: "Korea"},
    {name: "poco", brand: "MI", country: "China"},
    {name: "iphone", brand: "Apple", country: "US"},
]

// filter method

let filteredData = mobile.filter((value) => value.brand != "Apple");
console.log(filteredData);

// map method

let mapData = mobile.map((value) => console.log("value data", value));
console.log(mapData);
