import "./Modal.css"

import { useState, useEffect } from "react"


function Modal(props) {
    const [background_image, setBackgroundImage] = useState("")

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
                            <p>Genres: <span>{movie.genres}</span></p>

                            <button type="button" className="modal-close-button" onClick={props.closeModal}>Close</button>
                        </div>
                    )

                })
            }
        </div>
    )

}

export default Modal;
