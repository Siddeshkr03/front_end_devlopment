import "./Movies.css";

const Movies = ({ MoviesData }) => {
  return (
    <div>
      <div className="cards">
        {MoviesData.map((movie, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img src={movie.imageUrl} width={300} height={600} />

            {index === 2 && (
              <img
                src="https://brandlogovector.com/wp-content/uploads/2022/02/Disney-Hotstar-Logo-Small.png"
                alt="Disney+ Hotstar"
                style={{
                  position: "absolute",
                  top: "190px",
                  left: "100px",
                  width: "150px",
                  zIndex: 10,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;