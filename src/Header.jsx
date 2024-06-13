import React, {useState} from "react";

function Header(props) {
    return (
        <header>
            <div className="title">
                <i className="fa-solid fa-bars"></i>
                <h1>Flixster</h1>
            </div>
            <div className="search-sort">

                <select id="choice" onChange={props.handleSort}>
                    <option>Sort by</option>
                    <option value="Release Date Descending">Release Date Descending</option>
                    <option value="Popular Descending">Popular Descending</option>
                    <option value="Rating Descending">Rating Descending</option>
                </select>


                <a onClick={props.handleNowPlaying}>Now Playing</a>
                <a onClick={props.handleSearchOption}>Search</a>

            </div>


        </header>
    )

}

export default Header;
