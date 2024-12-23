import React, { useEffect } from 'react';
import { Globe2 } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { Filters } from './components/Filters';
import { MapComponent } from './components/MapComponent';
import { ThemeToggle } from './components/ThemeToggle';
import { useThemeStore } from './store/themeStore';

function App() {
  const isDark = useThemeStore((state) => state.isDark);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <header className="border-b dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Globe2 className="text-gray-900 dark:text-white" size={28} />
              <h1 className="text-xl font-medium text-gray-900 dark:text-white">Statistical Atlas</h1>
            </div>
            <ThemeToggle />
          </div>
          <div className="flex flex-col items-center gap-4">
            <SearchBar />
            <Filters />
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-6">
        <MapComponent />
      </main>
    </div>
  );
}

export default App;