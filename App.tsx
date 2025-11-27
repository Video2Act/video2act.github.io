import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-cyan selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        
        {/* Placeholder for Abstract/Content to demonstrate scroll interaction */}
        <section id="abstract" className="relative z-10 bg-white text-gray-900 py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-brand-dark">Abstract</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Generalist robots need to comprehend the physical world and predict the outcome of their actions.
              In this work, we present <strong>Video2Act</strong>, a novel framework that leverages video diffusion models 
              for robotic policy learning. By modeling both the spatial geometry of the scene and the motional dynamics 
              of the robot, our dual-system approach enables more robust and generalized manipulation capabilities.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
               (This section is a placeholder to demonstrate the scrolling effect and the layout structure below the new interactive hero cover.)
            </p>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-100 py-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Video2Act Project. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;