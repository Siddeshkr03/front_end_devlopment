class College{
    constructor(name){
        this.name = name;
    }
    famousFor(){
        console.log(`${this.name} is famous for placement`);
    }
}

class KIT extends College{
    famousFor(){
        console.log(`${this.name} is famous for placement`);
    }
}

class AIT extends College{
    famousFor(){
        console.log(`${this.name} is famous for Sanskriti`);
    }
}

const clg = new AIT("Dr. AIT")
clg.famousFor()