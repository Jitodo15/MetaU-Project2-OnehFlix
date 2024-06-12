 function SearchBar(props) {
    return (
        <div className="search-bar">
                <input type="text" placeholder="Search" value={props.input} onChange={props.search}/>
                <button className="search-button" onClick={props.search}>Search</button>
        </div>
    )
}

export default SearchBar;
