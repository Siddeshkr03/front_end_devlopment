
function one(){
    setTimeout(() => {
        console.log("Function one");   
    }, 3000);
}

function two(){
    setTimeout(() => {
        console.log("Function two");   
    }, 1000);
}

one();
two();
