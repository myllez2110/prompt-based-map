import React from 'react';
import { MapContainer as LeafletMapContainer, TileLayer } from 'react-leaflet';
import { MapControls } from './MapControls';
import { useThemeStore } from '../../store/themeStore';
import 'leaflet/dist/leaflet.css';

export const MapContainer = () => {
  const isDark = useThemeStore((state) => state.isDark);
  
  const tileLayer = isDark 
    ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
    : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  
  const attribution = isDark
    ? '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  return (
    <div className="w-full h-[calc(100vh-12rem)] relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
      <LeafletMapContainer
        center={[20, 0]}
        zoom={2}
        minZoom={2}
        className="w-full h-full"
        zoomControl={false}
      >
        <TileLayer
          url={tileLayer}
          attribution={attribution}
        />
        <MapControls />
      </LeafletMapContainer>
    </div>
  );
};