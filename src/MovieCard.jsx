import React from "react";

const MovieCard = (props) => { // either use props or destructuring {movie1}

return (
        <div className='movie' >
        <div>
            <p>{props.movie1.Year}</p>
        </div>
        <div>
            <img src={props.movie1.Poster !== 'N/A' ? props.movie1.Poster : 'https://via.placeholder.com/400' }
            alt={props.movie1.title}/>
        </div>
        <div>
            <span>{props.movie1.Type}</span>
            <h3>{props.movie1.Title}</h3>
        </div>
    </div>
)

}

export default MovieCard;