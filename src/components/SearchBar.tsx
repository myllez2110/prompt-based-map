import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useMapStore } from '../store/mapStore';

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const { fetchStatisticalData, loading, error } = useMapStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchValue.trim() || loading) return;
    
    try {
      await fetchStatisticalData(searchValue);
    } catch (error) {
      console.error('Failed to generate map:', error);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="mb-2">
        <div className="relative">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Enter a statistical topic (e.g., population density 2023, GDP per capita)"
            className="w-full px-4 py-2 pl-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-500"
            disabled={loading}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <button
            type="submit"
            disabled={loading || !searchValue.trim()}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Generating...' : 'Generate Map'}
          </button>
        </div>
      </form>
      {error && (
        <div className="text-red-600 dark:text-red-400 text-sm mt-2">
          {error}
        </div>
      )}
    </div>
  );
};