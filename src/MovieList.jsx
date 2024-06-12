import React, {useState, useEffect} from "react";
import MovieCard from "./MovieCard";

// import { M } from "vite/dist/node/types.d-aGj9QkWt";

function MovieList(props) {
    // console.log(data);
    // console.log(displayModal);
    function createCards(movie, index){

        return (

            <MovieCard key={index} title={movie.original_title} path={"https://image.tmdb.org/t/p/w500"+movie.poster_path} rating={movie.vote_average} releaseDate={movie.release_date} overview={movie.overview} showModal={() =>props.displayModal(movie.id)} />

        )
    }


    return (

        <div className="movie-cards">
            {
            props.data.map(createCards)

            }
        </div>




    )

}

export default MovieList;
