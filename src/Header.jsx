import React, {useState} from "react";

function Header(props) {
    return (
        <header>
            <div className="title">
                <h1>Flixster</h1>
            </div>
            <div className="search-sort">

                <select id="choice" onChange={props.handleSort}>
                    <option>Sort by</option>
                    <option value="Release Date Descending">Release Date Descending</option>
                    <option value="Popular Descending">Popular Descending</option>
                    <option value="Rating Descending">Rating Descending</option>
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
