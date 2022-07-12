import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({resident}) => {

    const [character, setCharacter] = useState()

    useEffect(()=> {
        axios
        .get(resident)
        .then(res => setCharacter(res.data))
        .catch(err => console.log(err))
    }, [])

    console.log(character);

    return (
        <div className='resident-card'>
            <img src={character?.image} alt="" />
            <h1>{character?.name}</h1>
            <ul>
                <li style={{background: character?.status === 'Alive' ? 'green' : character?.status === 'Dead' ? 'red' : 'gray'}}>
                    {character?.status}</li>
                <li>Origin: {character?.origin.name}</li>
                <li>Appearing episodes: {character?.episode.length}</li>
            </ul>
        </div>
    );
};

export default ResidentInfo;