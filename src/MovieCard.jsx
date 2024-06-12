import React from "react";

function MovieCard(props){

    return(

        <div className="movie" onClick={props.showModal}>
            <img className="movie-image" src={props.path} alt=""/>
            <h3>{props.title}</h3>
            <p>Rating: <span>{props.rating}</span></p>

        </div>
    )
}

export default MovieCard;
