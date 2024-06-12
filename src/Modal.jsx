import "./Modal.css"


function Modal(props) {

    return (
        <div id="modal" className="modal-overlay" >
            {props.data.filter(movie => movie.id === props.id)
                .map(movie => {
                    return(
                        <div key={movie.id} className="modal-content">
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
