import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Mappage from './Mappage'; // Import the MapPage component

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/map" element={<Mappage />} />
                <Route path="/map" element={<Mappage />} />
            </Routes>
        </Router>
    );
};

export default App;
