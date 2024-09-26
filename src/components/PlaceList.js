import React from 'react';

const PlaceList = ({ places }) => (
    <div>
        {places.map((place, index) => (
            <div key={index}>
                <h2>{place.name}</h2>
                <p>{place.description}</p>
            </div>
        ))}
    </div>
);

export default PlaceList;