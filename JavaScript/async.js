// Q - Write the code that explains async - await in JS

async function getData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let final = await response.json();
    console.log("Data is: ", final);
  } catch (error) {
    console.log("Error -> ", error);
  }
}

getData();
