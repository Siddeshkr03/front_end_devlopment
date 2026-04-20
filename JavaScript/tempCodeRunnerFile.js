function one(callback){
    setTimeout(() => {
        console.log("Function one");
        callback();   
    }, 3000);
}

function two(){
    setTimeout(() => {
        console.log("Function two");   
    }, 1000);
}

one(two());