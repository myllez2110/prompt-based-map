import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { MapControls } from './MapControls';
import 'leaflet/dist/leaflet.css';

export const MapComponent = () => {
  const handleReset = () => {
    // Reset map view implementation
  };

  return (
    <div className="w-full h-[calc(100vh-12rem)] relative rounded-lg overflow-hidden shadow-xl">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        className="w-full h-full"
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapControls onReset={handleReset} />
      </MapContainer>
    </div>
  );
};