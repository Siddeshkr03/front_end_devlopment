import React from 'react';
import Movies from './components/apr-28/Movies';
// import './App.css'


const App = () => {
  const data = [
    {
      title: "Jack Sparrow",
      imageUrl: "https://imgs.search.brave.com/ftQ8F1R8R4jLrOrYTFhNh-GkG8b42qOG7F4RKFwtA9E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE5NTQz/NDkuanBn",
      about: "Jack Sparrow is a fictional character..."
    },
     {
      title: "Jack Sparrow",
      imageUrl: "https://imgs.search.brave.com/ftQ8F1R8R4jLrOrYTFhNh-GkG8b42qOG7F4RKFwtA9E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE5NTQz/NDkuanBn",
      about: "Jack Sparrow is a fictional character..."
    },
     {
      title: "Jack Sparrow",
      imageUrl: "https://imgs.search.brave.com/ftQ8F1R8R4jLrOrYTFhNh-GkG8b42qOG7F4RKFwtA9E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE5NTQz/NDkuanBn",
      about: "Jack Sparrow is a fictional character..."
    }
  ];

  return (
    <div>
      <Movies MoviesData={data} />
    </div>
  );
};

export default App;