import "./WatchedMovie.css";
function WatchedMovie(props){
    return(
        <div className="watched-movie">
            <img className="watched-movie-image" src={"https://image.tmdb.org/t/p/w500"+props.movieImage}/>
            <p>{props.movieTitle}</p>
        </div>
    )
}

export default WatchedMovie;
