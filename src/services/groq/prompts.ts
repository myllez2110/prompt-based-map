export const generateStatisticalPrompt = (topic: string, year: number, region: string) => {
  return `Generate a GeoJSON object for a statistical map about "${topic}" for the year ${year} in the ${region} region. 
  The response should be a valid GeoJSON FeatureCollection where each feature represents a country or region with the following structure:
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
        "geometry": { ... }
      }
    ]
  }
  
  Focus on providing realistic, research-based statistical values. Include proper units of measurement.`;
};