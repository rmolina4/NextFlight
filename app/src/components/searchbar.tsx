"use client"

import React, { useState } from 'react';

const SearchBar: React.FC = () => {
    const [userinput, setUserinput] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserinput(event.target.value);
    };

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Search query:', userinput);
        // get search results based on userinput from api
    };

    return (
        <form onSubmit={handleSearch} className="search-bar">
            <input
                type="text"
                value={userinput}
                onChange={handleInputChange}
                placeholder="Search flights..."
                className="search-input"
            />
            <button type="submit" className="search-button">
                Search
            </button>
        </form>
    );
};

export default SearchBar;