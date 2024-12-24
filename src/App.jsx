import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { RepositoryList } from './components/RepositoryList';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main className="flex-1 lg:p-6 max-h-screen overflow-y-auto">
          <Header onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
          <RepositoryList />
        </main>
      </div>
    </div>
  );
}

export default App;