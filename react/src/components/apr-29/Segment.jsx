import React from "react";
import "./Segment.css";

function Segment(props) {
  console.log(props);

  let ArrayMovie = props.data.map((movie) => {
    return (
      <div className="movieElement">
        <img src={movie.imageUrl} alt={movie.title} />
      </div>
    );
  });

  return <div className="banner">{ArrayMovie}</div>;
}

export default Segment;
