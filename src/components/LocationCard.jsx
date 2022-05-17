import React from 'react';

const LocationCard = ({location}) => {
    // console.log(location);
    return (
        <div className='location-card'>
            <h1>{location?.name}</h1>
            <li>
                <b>Type: </b> {location?.type}
                <b>Dimension: </b> {location?.dimension}
                <b>Population: </b> {location?.residents.length}
            </li>
        </div>
    );
};

export default LocationCard;