export interface MapData {
  topic: string;
  year?: number;
  region?: string;
}

export interface MapStore {
  topic: string;
  year: number;
  region: string;
  setTopic: (topic: string) => void;
  setYear: (year: number) => void;
  setRegion: (region: string) => void;
}

export interface MapControlsProps {
  onReset: () => void;
}