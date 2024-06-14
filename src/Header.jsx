import React, {useState} from "react";

function Header(props) {

    return (
        <header>
            <div className="title">
                <i onClick={props.handleSideBar} className="fa-solid fa-bars"></i>
                <h1>OnéhFlix</h1>
            </div>
            <div className="search-sort">
                <button onClick={props.handleNowPlaying}>Now Playing</button>
                <button onClick={props.handleSearchOption}>Search</button>

                <select id="choice" onChange={props.handleSort}>
                    <option>Sort by</option>
                    <option value="primary_release_date.asc">Release Date Ascending</option>
                    <option value="primary_release_date.desc">Release Date Descending</option>
                    <option value="popularity.asc">Popular Ascending</option>
                    <option value="popularity.desc">Popular Descending</option>
                    <option value="vote_average.asc">Vote Average Ascending</option>
                    <option value="vote_average.desc">Vote Average Descending</option>
                </select>

                <select id="choice" onChange={props.handleFilter}>
                    <option>Filter by Genre</option>
                    <option value="28">Action</option>
                    <option value="12">Adventure</option>
                    <option value="35">Comedy</option>
                    <option value="18">Drama</option>
                    <option value="10751">Family</option>
                    <option value="27">Horror</option>
                </select>


            </div>
        </header>
    )

}

export default Header;
