import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useMapStore } from '../store/mapStore';

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const setTopic = useMapStore((state) => state.setTopic);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTopic(searchValue);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="relative">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Enter a statistical topic (e.g., population, GDP)"
          className="w-full px-4 py-2 pl-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-500"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
};