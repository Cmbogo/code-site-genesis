
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Home from '@/components/pages/Home';
import About from '@/components/pages/About';
import Projects from '@/components/pages/Projects';
import Blog from '@/components/pages/Blog';
import Contact from '@/components/pages/Contact';

const Index = () => {
  const [activePage, setActivePage] = useState('home');

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderActivePage()}
      </main>

      <footer className="bg-gray-800 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Cicily Mbogo. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
