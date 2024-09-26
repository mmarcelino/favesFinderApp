import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Optional: for styling

const HomePage = () => {
    const navigate = useNavigate();

    const handleExploreClick = () => {
        navigate('/map');
    };

    return (
        <div className="home-container">
            <h1>Map</h1>
            <button onClick={handleExploreClick} className="explore-button">
                Explore
            </button>
        </div>
    );
};

export default HomePage;
