import "./SideBar.css"
import WatchedMovie from "./WatchedMovie";

function SideBar(props) {

    function WatchedMovies(movieID, index) {
        const selectedMovie = props.data.find((item) => item.id === movieID)
        console.log(selectedMovie)
        return(


            <WatchedMovie key={index} movieTitle={selectedMovie.original_title} movieImage={selectedMovie.poster_path}/>
        )
    }

    return(

        <div className="sidebar">
            <h5>Favorite and Watched Movies</h5>
            <div className="sidebar-item">
                {props.watchedMovies.map(WatchedMovies)}

            </div>


        </div>
    )

}

export default SideBar;
