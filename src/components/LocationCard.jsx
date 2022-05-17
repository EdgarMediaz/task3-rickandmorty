import React from 'react';

const LocationCard = ({location}) => {
    // console.log(location);
    return (
        <div className='location-card'>
            <h1>{location?.name}</h1>
            <ul>
                <li><b>Type: </b> {location?.type}</li>
                <li><b>Dimension: </b> {location?.dimension}</li>
                <li><b>Population: </b> {location?.residents.length}</li>
            </ul>
        </div>
    );
};

export default LocationCard;