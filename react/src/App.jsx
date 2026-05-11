// // import { useState } from "react";
// // import reactLogo from "./assets/react.svg";
// // import viteLogo from "./assets/vite.svg";
// // import heroImg from "./assets/hero.png";
// import "./App.css";
// import FirstCode from "./components/apr-27/FirstCode";
// import SecondCode from "./components/apr-27/SecondCode";
// import ThirdCode from "./components/apr-27/ThirdCode";
// import Movies from "./components/apr-28/Movies";

// function App() {
//   // const [count, setCount] = useState(0);
//   // let name = "John Doe";

//   let data = [
//     {
//       title: "The Shawshank Redemption",
//       imageUrl: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
//       about:
//         "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
//     },
//     {
//       title: "The Godfather",
//       imageUrl: "https://m.media-amazon.com/images/I/61k7Mx2IjzL._SY879_.jpg",
//       about:
//         "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
//     },
//     {
//       title: "Inside Out",
//       imageUrl:
//         "//upload.wikimedia.org/wikipedia/en/thumb/f/f7/Inside_Out_2_poster.jpg/250px-Inside_Out_2_poster.jpg",
//       about:
//         "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
//     },
//   ];

//   return (
//     <div>
//       {/* <h1>Hello React</h1>
//       <img src={heroImg} alt="Hero Logo" width="250" height="250" />
//       <img src={viteLogo} alt="Vite Logo" width="250" height="250" />
//       <img src={reactLogo} alt="React Logo" width="250" height="250" />
//       <p>These are the logo images of Hero, vite and react </p>
//       <button onClick={() => setCount(count + 1)}>Click Me</button>
//       <p>You clicked {count} times</p> */}
//       {/* <FirstCode name="Jane Austen"/> */}
//       {/* Output is Jane Austen */}
//       {/* <FirstCode name={namessss} /> */}
//       {/* Output is a blank page because namessss is not defined and it is throwing an error. */}
//       {/* <FirstCode name={name} />
//         <SecondCode />
//         <ThirdCode /> */}
//       <Movies moviesData={data} />
//     </div>
//   );
// }

// export default App;

// Movies Template

import "./App.css";
import FirstCode from "./components/apr-27/FirstCode";
import Movies from "./components/apr-28/Movies";
import Option from "./components/apr-29/Option";
import Segment from "./components/apr-29/Segment";
import Mobile from "./components/may-1/Mobile";
import MobileView from "./components/may-1/MobileView";
import Concert from "./components/may-4/Concert";
import Event from "./components/may-4/Event";
import CounterOne from "./components/may-5/CounterOne";
import CounterTwo from "./components/may-5/CounterTwo";
import Hooks from "./components/may-5/Hooks";
import ThisWays from "./components/may-5/ThisWays";
import Routing from "./components/may-6/Routing";

function App() {
  // let name = "Johnny";
  // let imageUrl =
  //   "https://www.srilankaclassytours.com/medias/activity/big/189/2.jpg";
  // return (
  //   <div>
  //     <Option data={{ name, imageUrl }} />
  //   </div>
  // );

  const moviesData = [
    {
      title: "The Shawshank Redemption",
      imageUrl: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
      about:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    },
    {
      title: "The Godfather",
      imageUrl: "https://m.media-amazon.com/images/I/61k7Mx2IjzL._SY879_.jpg",
      about:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    },
    {
      title: "Inside Out",
      imageUrl:
        "//upload.wikimedia.org/wikipedia/en/thumb/f/f7/Inside_Out_2_poster.jpg/250px-Inside_Out_2_poster.jpg",
      about:
        "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
    },
    {
      title: "The Dark Knight",
      imageUrl:
        "//upload.wikimedia.org/wikipedia/en/thumb/1/1c/The_Dark_Knight_%282008_film%29.jpg/250px-The_Dark_Knight_%282008_film%29.jpg",
      about:
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    },
    {
      title: "Frozen",
      imageUrl:
        "//upload.wikimedia.org/wikipedia/en/thumb/0/05/Frozen_%282013_film%29_poster.jpg/250px-Frozen_%282013_film%29_poster.jpg",
      about:
        "Two sisters, Anna and Elsa, are separated by an accident and must find a way to reunite them.",
    },
  ];

  // return (
  //   <div>
  //     <Segment data={moviesData} />
  //   </div>
  // )

  let name = "David";
  let city = "Bangalore";

  const mobiles = [
    {
      name: "iPhone 13",
      mobileUrl: "https://m.media-amazon.com/images/I/71-Vr6lmMRL._SX679_.jpg",
      about:
        "The iPhone 13 features a sleek design, powerful performance, and an advanced camera system for stunning photos and videos.",
    },
    {
      name: "Samsung Galaxy S21",
      mobileUrl: "https://m.media-amazon.com/images/I/71-Vr6lmMRL._SX679_.jpg",
      about:
        "The Samsung Galaxy S21 offers a dynamic AMOLED display, high-performance processor, and a versatile camera setup for capturing every moment.",
    },
    {
      name: "Google Pixel 6",
      mobileUrl: "https://m.media-amazon.com/images/I/71-Vr6lmMRL._SX679_.jpg",
      about:
        "The Google Pixel 6 boasts a powerful Tensor chip, an impressive camera system, and a clean Android experience for seamless performance.",
    },
  ];
  return (
    <div>
      {/* <Mobile name={name} city={city} /> */}
      {/* <MobileView mobileList={mobiles} /> */}
      {/* <Event />
      <Concert /> */}
      {/* <ThisWays /> */}
      {/* <Hooks /> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      <Routing />
    </div>
  );
}

export default App;
