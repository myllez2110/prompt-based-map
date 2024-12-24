import { create } from 'zustand';
import { MapStore } from '../types';
import { generateStatisticalMap } from '../services/aiService';

export const useMapStore = create<MapStore>((set, get) => ({
  topic: '',
  year: new Date().getFullYear(),
  region: 'World',
  loading: false,
  error: null,
  geoData: null,
  setTopic: (topic) => set({ topic }),
  setYear: (year) => set({ year }),
  setRegion: (region) => set({ region }),
  setGeoData: (data) => set({ geoData: data }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  fetchStatisticalData: async (query: string) => {
    const { year, region } = get();
    
    set({ loading: true, error: null, geoData: null }); // Reset geoData before new search
    
    try {
      const geoData = await generateStatisticalMap(query, year, region);
      set({ geoData, loading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch statistical data',
        loading: false,
        geoData: null
      });
    }
  }
}));