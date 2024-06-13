import "./Modal.css"

import { useState, useEffect } from "react"


function Modal(props) {
    const [background_image, setBackgroundImage] = useState("")

    const Genres = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Science Fiction",
        10770: "TV Movie",
        53: "Thriller",
        10752: "War",
        37: "Western",
    };

    useEffect(() => {
        const movie =props.data.find(movie => movie.id === props.id)
        if(movie){
            setBackgroundImage(`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`);
        }
    }, [props.id, props.data]);

    const backgroundStyle = {
        backgroundImage: `url(${background_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 0.5"
    };

    function mapGenres(genres){

        return genres.map(genre => Genres[genre]).join(", ")
    }

    return (

        <div id="modal" className="modal-overlay" >

            {props.data.filter(movie => movie.id === props.id)
                .map(movie => {


                    return(

                        <div key={movie.id} className="modal-content" style={backgroundStyle}>
                            <h1>{movie.title}</h1>
                            <img className="modal-image" src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} alt="movie-poster" />
                            <p>Release Date: <span>{movie.release_date}</span></p>
                            <p>Overview: <span>{movie.overview}</span></p>
                            <p>Genres: <span>{mapGenres(movie.genre_ids)}</span></p>

                            <button type="button" className="modal-close-button" onClick={props.closeModal}>Close</button>
                        </div>

                    )

                })
            }
        </div>
    )

}

export default Modal;
