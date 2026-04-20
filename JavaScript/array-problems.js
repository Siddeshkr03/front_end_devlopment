// 

// Prime number

let num = 23;

function prime(num){
  for(let i=2; i<num; i++){
  if(num % i == 0){
    return "Not a Prime"
  }
}
  return "Prime"
}

console.log(prime(num));
