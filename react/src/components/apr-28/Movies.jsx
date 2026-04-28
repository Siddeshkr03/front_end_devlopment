const Movies = ({ MoviesData }) => {
  return (
    <div>
      {MoviesData.map((movie, index) => (
        <div >
          <img src={movie.imageUrl} height={600}/>
        </div>
      ))}
    </div>
  );
};

export default Movies;