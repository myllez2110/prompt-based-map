export const generateStatisticalPrompt = (topic: string, year: number, region: string) => {
  return `Generate a GeoJSON object for a statistical map about "${topic}" for the year ${year} in the ${region} region. 
  The response must be a valid GeoJSON FeatureCollection containing only the following structure, with no additional text or explanations:
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "name": "Country Name",
          "value": numeric_value,
          "unit": "measurement unit"
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [[[longitude, latitude], ...]]
        }
      }
    ]
  }
  
  Important:
  - Provide realistic, research-based statistical values
  - Include proper units of measurement
  - Return only valid GeoJSON, no additional text
  - Ensure all coordinates are valid (longitude: -180 to 180, latitude: -90 to 90)`;
};