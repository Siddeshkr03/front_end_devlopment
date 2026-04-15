class Demo {

}

let demo = new Demo(); // Instance of the class (Object)
console.log(demo);

class Car{
    constructor(name, model){
        this.name = name;
        this.model = model;
    }
}

let bmw = new Car("BMW", "M5")
let audi = new Car("Audi","audi")
console.log(bmw);
console.log(audi);


