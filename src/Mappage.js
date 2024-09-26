import React, { useState } from 'react';
import Filter from './Filter';
import Map from './Map';
import './App.css'; // Ensure this includes your CSS for styling

const initialPlaces = [
    { name: 'Lisbon Cafe', description: 'A great spot in Lisbon', location: 'Lisbon', category: 'Cafe', latitude: 38.7169, longitude: -9.1399 },
    { name: 'Porto Pub', description: 'A nice pub in Porto', location: 'Porto', category: 'Pub', latitude: 41.1496, longitude: -8.6109 },
    // Add more places with latitude and longitude...
];

const MapPage = () => {
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');

    const filteredPlaces = initialPlaces.filter(place =>
        (location === '' || place.location === location) &&
        (category === '' || place.category === category)
    );

    return (
        <div className="app">
            <header className="navbar">
                <div className="navbar-content">
                    <Filter location={location} setLocation={setLocation} category={category} setCategory={setCategory} />
                </div>
            </header>
            <div className="map-container">
                <Map places={filteredPlaces} />
            </div>
        </div>
    );
};

export default MapPage;
