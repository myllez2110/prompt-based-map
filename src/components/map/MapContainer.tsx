import React from 'react';
import { MapContainer as LeafletMapContainer, TileLayer } from 'react-leaflet';
import { MapControls } from './MapControls';
import { GeoJsonLayer } from './GeoJsonLayer';
import { useThemeStore } from '../../store/themeStore';
import { useMapStore } from '../../store/mapStore';
import 'leaflet/dist/leaflet.css';

export const MapContainer = () => {
  const isDark = useThemeStore((state) => state.isDark);
  const { geoData, loading, error } = useMapStore();
  
  const tileLayer = isDark 
    ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
    : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  
  const attribution = isDark
    ? '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  return (
    <div className="w-full h-[calc(100vh-12rem)] relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
      {loading && (
        <div className="absolute inset-0 bg-black/10 dark:bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg">
            <p className="text-gray-900 dark:text-white">Generating map...</p>
          </div>
        </div>
      )}
      
      {error && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800 px-4 py-2 rounded-lg shadow-lg">
            <p className="text-red-700 dark:text-red-200">{error}</p>
          </div>
        </div>
      )}
      
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
        {geoData && <GeoJsonLayer data={geoData} />}
        <MapControls />
      </LeafletMapContainer>
    </div>
  );
};