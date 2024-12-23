import { create } from 'zustand';
import { MapStore } from '../types';

export const useMapStore = create<MapStore>((set) => ({
  topic: '',
  year: new Date().getFullYear(),
  region: 'World',
  setTopic: (topic) => set({ topic }),
  setYear: (year) => set({ year }),
  setRegion: (region) => set({ region }),
}));