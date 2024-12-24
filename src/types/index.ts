export interface MapData {
  topic: string;
  year?: number;
  region?: string;
}

export interface MapStore {
  topic: string;
  year: number;
  region: string;
  loading: boolean;
  error: string | null;
  geoData: any | null;
  setTopic: (topic: string) => void;
  setYear: (year: number) => void;
  setRegion: (region: string) => void;
  setGeoData: (data: any) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  fetchStatisticalData: (query: string) => Promise<void>;
}

export interface GeoJsonFeature {
  type: "Feature";
  geometry: any;
  properties: {
    name: string;
    value: number;
    [key: string]: any;
  };
}

export interface GeoJsonData {
  type: "FeatureCollection";
  features: GeoJsonFeature[];
}