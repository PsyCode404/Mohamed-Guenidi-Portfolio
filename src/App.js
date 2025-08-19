import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import TabNavigation from './components/layout/TabNavigation';
import About from './components/sections/vCard/About';
import Resume from './components/sections/vCard/Resume';
import Portfolio from './components/sections/vCard/Portfolio';
import Contact from './components/sections/vCard/Contact';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;

      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        {/* Tab Navigation */}
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {renderActiveTab()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
