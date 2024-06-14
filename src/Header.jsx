import React, {useState} from "react";

function Header(props) {

    return (
        <header>
            <div className="title">
                <i onClick={props.handleSideBar} className="fa-solid fa-bars"></i>
                <h1>OnéhFlix</h1>
            </div>
            <div className="search-sort">
                <a onClick={props.handleNowPlaying}>Now Playing</a>

                <select id="choice" onChange={props.handleSort}>
                    <option>Sort by</option>
                    <option value="Release Date Descending">Release Date Descending</option>
                    <option value="Popular Descending">Popular Descending</option>
                    <option value="Rating Descending">Rating Descending</option>
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

                <a onClick={props.handleSearchOption}><i class="fa-solid fa-magnifying-glass"></i></a>
            </div>
        </header>
    )

}

export default Header;
