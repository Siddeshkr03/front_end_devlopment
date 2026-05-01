import React from "react";
import "./Movies.css";

function Movies(props) {
  console.log("Props", props);

  let MoviesData = props.movies.map((value, index) => {
    return (
      <div key={index}>
        <img className="marvel" src={value.imageUrl} alt="movie" />
      </div>
    );
  });

  return (
    <div className="main">
      <div className="banner">{MoviesData}</div>
    </div>
  );
}

export default Movies;