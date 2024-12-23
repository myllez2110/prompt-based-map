import React from 'react';
import { useMapStore } from '../store/mapStore';

export const Filters = () => {
  const { year, region, setYear, setRegion } = useMapStore();

  return (
    <div className="flex gap-4 w-full max-w-2xl">
      <div className="flex-1">
        <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Year</label>
        <select
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="w-full px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-500"
        >
          {Array.from({ length: 24 }, (_, i) => 2000 + i).map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>
      <div className="flex-1">
        <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Region</label>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="w-full px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-500"
        >
          <option value="World">World</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};