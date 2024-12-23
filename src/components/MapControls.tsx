import React from 'react';
import { ZoomIn, ZoomOut, RefreshCw } from 'lucide-react';
import { useMapEvents } from 'react-leaflet';
import type { MapControlsProps } from '../types';

export const MapControls: React.FC<MapControlsProps> = ({ onReset }) => {
  const map = useMapEvents({
    load: () => {
      map.setView([20, 0], 2);
    },
  });

  return (
    <div className="absolute bottom-8 right-8 flex flex-col gap-2 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg">
      <button
        onClick={() => map.zoomIn()}
        className="p-2 hover:bg-gray-100 rounded-md transition-colors"
        aria-label="Zoom in"
      >
        <ZoomIn size={20} />
      </button>
      <button
        onClick={() => map.zoomOut()}
        className="p-2 hover:bg-gray-100 rounded-md transition-colors"
        aria-label="Zoom out"
      >
        <ZoomOut size={20} />
      </button>
      <button
        onClick={onReset}
        className="p-2 hover:bg-gray-100 rounded-md transition-colors"
        aria-label="Reset view"
      >
        <RefreshCw size={20} />
      </button>
    </div>
  );
};