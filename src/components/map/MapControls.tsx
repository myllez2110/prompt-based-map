import React from 'react';
import { ZoomIn, ZoomOut, RefreshCw } from 'lucide-react';
import { useMap } from 'react-leaflet';
import { useThemeStore } from '../../store/themeStore';

export const MapControls = () => {
  const map = useMap();
  const isDark = useThemeStore((state) => state.isDark);

  const handleReset = () => {
    map.setView([20, 0], 2);
  };

  const buttonClass = `
    p-2 rounded-md transition-colors
    ${isDark 
      ? 'bg-gray-800 hover:bg-gray-700 text-white' 
      : 'bg-white hover:bg-gray-100 text-gray-700'}
  `;

  return (
    <div className="absolute bottom-8 right-8 flex flex-col gap-2 p-2 rounded-lg bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-800 shadow-lg"
     style={{ zIndex: 1000 }}>
       <button
        onClick={() => map.zoomIn()}
        className={buttonClass}
        aria-label="Zoom in"
      >
        <ZoomIn size={20} />
      </button>
      <button
        onClick={() => map.zoomOut()}
        className={buttonClass}
        aria-label="Zoom out"
      >
        <ZoomOut size={20} />
      </button>
      <button
        onClick={handleReset}
        className={buttonClass}
        aria-label="Reset view"
      >
        <RefreshCw size={20} />
      </button>
    </div>
  );
};