import React from 'react';

const SearchBar = ({setSearch}) => {

    const submit = e => {
        e.preventDefault()
        setSearch(e.target.firstChild.value)
        e.target.firstChild.value = ""
    }

    return (
        <form onSubmit={submit}>
            <input type="text"/>
            <button>Search</button>
        </form>
    );
};

export default SearchBar;