import React, { useState } from 'react';
import './Filter.css'; // Ensure this is imported for styling

const locations = ['Lisbon', 'Porto'];
const categories = ['Cafe', 'Pub'];

const Filter = ({ location, setLocation, category, setCategory }) => {
    const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

    const handleLocationChange = (loc) => {
        setLocation(loc);
        setIsLocationDropdownOpen(false);
    };

    const handleCategoryChange = (cat) => {
        setCategory(cat);
        setIsCategoryDropdownOpen(false);
    };

    return (
        <div className="filter-container">
            <div className="filter-dropdown">
                <button
                    onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                    className="dropdown-button"
                >
                    Location
                </button>
                {isLocationDropdownOpen && (
                    <div className="dropdown-menu">
                        {locations.map((loc) => (
                            <div
                                key={loc}
                                className="dropdown-item"
                                onClick={() => handleLocationChange(loc)}
                            >
                                {loc}
                            </div>
                        ))}
                        <div
                            className="dropdown-item"
                            onClick={() => handleLocationChange('')}
                        >
                            All
                        </div>
                    </div>
                )}
                {location && (
                    <div className="pill location-pill">
                        {location}
                        <span className="pill-remove" onClick={() => setLocation('')}>×</span>
                    </div>
                )}
            </div>
            <div className="filter-dropdown">
                <button
                    onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                    className="dropdown-button"
                >
                    Category
                </button>
                {isCategoryDropdownOpen && (
                    <div className="dropdown-menu">
                        {categories.map((cat) => (
                            <div
                                key={cat}
                                className="dropdown-item"
                                onClick={() => handleCategoryChange(cat)}
                            >
                                {cat}
                            </div>
                        ))}
                        <div
                            className="dropdown-item"
                            onClick={() => handleCategoryChange('')}
                        >
                            All
                        </div>
                    </div>
                )}
                {category && (
                    <div className="pill category-pill">
                        {category}
                        <span className="pill-remove" onClick={() => setCategory('')}>×</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Filter;
