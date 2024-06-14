 import React, { useState } from 'react';

function SearchBar(props) {
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event){
        setInputValue(event.target.value);
        if(event.target.value === ''){
            props.searchBarEmpty()
        }
    }

    return (
        <div className="search-bar">
                <input type="text" placeholder="Search" value={inputValue} onChange={handleInputChange}/>
                <button className="search-button" onClick={() => props.search(inputValue)}>Search</button>
        </div>
    )
}

export default SearchBar;
