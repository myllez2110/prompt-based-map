import type { GeoJsonData } from '../../types';

export const parseGroqResponse = (response: string): GeoJsonData => {
  try {
    const parsed = JSON.parse(response);
    
    if (parsed.type !== 'FeatureCollection' || !Array.isArray(parsed.features)) {
      throw new Error('Invalid GeoJSON format');
    }
    
    return parsed;
  } catch (error) {
    throw new Error('Failed to parse AI response as GeoJSON');
  }
};