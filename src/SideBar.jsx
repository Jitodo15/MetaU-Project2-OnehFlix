import "./SideBar.css"
import WatchedAndFavMovie from "./WatchedAndFavMovie";

function SideBar(props) {

    function WatchedAndFavMovies(movieID, index) {
        const selectedMovie = props.data.find((item) => item.id === movieID)
        console.log(selectedMovie)
        return(
            <WatchedAndFavMovie
                key={index}
                movieTitle={selectedMovie.original_title}
                movieImage={selectedMovie.poster_path}
            />
        )
    }

    return(
        <div className="sidebar">
            <h5>Watched Movies</h5>
            <div className="sidebar-item">
                {props.watchedMovies.map(WatchedAndFavMovies)}
            </div>
            <h5>Favorite Movies</h5>
            <div className="sidebar-item">
                {props.favMovies.map(WatchedAndFavMovies)}
            </div>
        </div>
    )

}

export default SideBar;
