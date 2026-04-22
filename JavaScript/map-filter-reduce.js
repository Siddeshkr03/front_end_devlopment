let mobile = [
    {name: "iphone", brand: "Apple", country: "USA"},
    {name: "galaxy", brand: "Samsung", country: "Korea"},
    {name: "poco", brand: "MI", country: "China"},
    {name: "iphone", brand: "Apple", country: "US"},
]

// filter method

filteredData = mobile.filter((value) => value.brand != "Apple");
console.log(filteredData);
