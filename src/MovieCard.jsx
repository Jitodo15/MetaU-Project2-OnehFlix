import React, {useState} from "react";

function MovieCard(props){
    const [isFav, setIsFav] = useState(false);
    const [isWatched, setIsWatched] = useState(false);

    return(

        <div className="movie" onClick={props.showModal}>
            <img className="movie-image" src={props.path} alt=""/>
            <h3>{props.title}</h3>
            <p>Rating: <span>{props.rating}</span></p>

            <div className="favorite-watched-icons">
                <a className="favortite-icon"
                    onClick={(e) => {
                            e.stopPropagation();
                            props.favMovies();
                            setIsFav(!isFav);
                    }}>
                        {isFav ?
                            <i className="fa-solid fa-star"></i>:
                             <i className="fa-regular fa-star"></i>
                        }
                </a>

                <p>Watched:
                    <span className="watched"
                        onClick={(e) => {
                            e.stopPropagation();
                            props.watchedMovies();
                            setIsWatched(!isWatched);
                        }}>
                            {isWatched?
                                <i className="fa-solid fa-square-check"></i> :
                                <i className="fa-regular fa-square-check"></i>
                            }
                    </span>
                </p>
            </div>
        </div>
    )
}

export default MovieCard;
