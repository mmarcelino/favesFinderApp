// src/Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome is imported

const Map = ({ places }) => {
    const customIcon = new L.DivIcon({
        html: '<i class="fas fa-map-marker-alt" style="color: #E27DEE; font-size: 24px;"></i>', // Font Awesome icon
        className: 'custom-icon', // Optional: class for additional styling
        iconSize: [24, 24], // Size of the icon
    });

    return (
        <MapContainer center={[39.3999, -8.2245]} zoom={7} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {places.map((place, index) => (
                <Marker
                    key={index}
                    position={[place.latitude, place.longitude]}
                    icon={customIcon} // Apply Font Awesome icon here
                >
                    <Popup>
                        <strong>{place.name}</strong><br />
                        {place.description}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
