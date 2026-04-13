// this key is used to refer the object related data

let obj = {
    name:"Virat",
    sayhello:function(){
        console.log(`say hello to ${this.name}`);
    },
};

obj.sayhello();