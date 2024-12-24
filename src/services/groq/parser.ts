import type { GeoJsonData } from '../../types';

export const parseGroqResponse = (response: string): GeoJsonData => {
  try {
    // Remove any potential text before or after the JSON
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No valid JSON found in response');
    }
    
    const jsonStr = jsonMatch[0];
    const parsed = JSON.parse(jsonStr);
    
    if (parsed.type !== 'FeatureCollection' || !Array.isArray(parsed.features)) {
      throw new Error('Invalid GeoJSON format');
    }
    
    // Validate features
    parsed.features.forEach((feature: any, index: number) => {
      if (!feature.type || !feature.properties || !feature.geometry) {
        throw new Error(`Invalid feature at index ${index}`);
      }
      
      if (!feature.properties.name || typeof feature.properties.value !== 'number') {
        throw new Error(`Invalid properties in feature ${feature.properties.name || index}`);
      }
    });
    
    return parsed;
  } catch (error) {
    console.error('Parser Error:', error);
    throw new Error('Failed to parse AI response as GeoJSON');
  }
};