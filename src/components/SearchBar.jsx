import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const SearchBar = ({setSearch}) => {

    const submit = e => {
        e.preventDefault()
        setSearch(e.target.firstChild.value)
        e.target.firstChild.value = ""
    }

    const [location, setLocation] = useState('')
    const [suggestions, setSuggestions] = useState([])

    useEffect(()=> {
        if(location){
            axios.get(`https://rickandmortyapi.com/api/location?name=${location}`)
                .then(res=> setSuggestions(res.data))
        } else {
            setSuggestions([])
        }
    },[location])

    return (
        <form onSubmit={submit}>
            <input type="number" placeholder='type a location id number (1-126)'
            onChange={e=> setLocation(e.target.value)}
            value={location}
            />
            <button>Search</button>
            {
                suggestions.results?.map(suggestion=> (
                    <div>{suggestion.name}</div>
                ))
            }
        </form>
    );
};

export default SearchBar;