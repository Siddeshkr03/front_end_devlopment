// // Learning concept : Lexical Scoping

// // Global scope
// // Local scope
// // Nested scope
// // block scope

// let ad = "Five star Ad"; // global scope

// function ramesh(){
//     let one = "Ramesh is on the set ";// local scope
//     console.log(ad);
//     console.log(one);

//     function suresh(){
//     let two = "Suresh on the set"; // nested scope

//     console.log(ad);
//     console.log(one);
//     console.log(two);

//     if(true){
//         let final = "Ad is done"; // block scope
//         console.log(final);
//     }
// }
//     suresh()
// }
// ramesh()

let rs = "Play aggressive"; // global

function viratPlan() {
  let vs = "Anchor innings";

  function dhonifinish() {

    let ds = "Finish match"
    console.log(rs);
    console.log(vs);
    console.log(ds);
  }

  dhonifinish()

  console.log(rs); // 😀
  console.log(vs); // 😀
  // console.log(ds); 😒 Error
}

viratPlan()

// console.log(vs); // 😒 Error
// console.log(ds); // 😒 Error


