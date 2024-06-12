import React, {useState} from "react";

function Header(props) {
    return (
        <header>
            <div className="title">
                <h1>Flixster</h1>
            </div>
            <div className="search-sort">

                <select id="choice">
                    <option>Sort by</option>
                    <option>Release Date Descending</option>
                    <option onClick={props.sort}>Popular Descending</option>
                    <option>Rating Descending</option>
                </select>

                <div className="option-btn">
                    <button onClick={props.handleNowPlaying}>Now Playing</button>
                    <button onClick={props.handleSearchOption}>Search</button>
                </div>
            </div>


        </header>
    )

}

export default Header;
