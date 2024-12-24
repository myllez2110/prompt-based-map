import React from 'react';
import { GeoJSON, Tooltip, useMap } from 'react-leaflet';
import { useThemeStore } from '../../store/themeStore';
import type { GeoJsonData } from '../../types';

interface GeoJsonLayerProps {
  data: GeoJsonData;
}

export const GeoJsonLayer: React.FC<GeoJsonLayerProps> = ({ data }) => {
  const isDark = useThemeStore((state) => state.isDark);

  const style = (feature: any) => {
    const value = feature.properties.value;
    return {
      fillColor: '#3B82F6',
      weight: 1,
      opacity: 1,
      color: isDark ? '#4B5563' : '#E5E7EB',
      fillOpacity: 0.7,
    };
  };

  const onEachFeature = (feature: any, layer: any) => {
    const properties = feature.properties;
    layer.bindTooltip(
      `<div class="font-medium">${properties.name}</div>
       <div>${properties.value}</div>`
    );
  };

  return <GeoJSON data={data} style={style} onEachFeature={onEachFeature} />;
};
