import React from 'react';

function Movies(props) {
    console.log("props from the app file", props);

    let moviePage = props.moviesData.map((movie) => {
        return (
            <div>
                <img src={movie.imageUrl} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>{movie.about}</p>
            </div>
        );
    });
    
    return (
        <div>
            {moviePage}
        </div>
    );

}


export default Movies;