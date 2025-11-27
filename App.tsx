import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import VideoCarousel from './components/VideoCarousel';
import { CarouselItem } from './types';

// Example Data - Replace with your actual video URLs
const DEMO_VIDEOS: CarouselItem[] = [
  { id: 1, title: 'Long-horizon Manipulation', description: 'Completing a complex cooking task', videoUrl: 'https://cdn.pixabay.com/video/2023/10/12/184734-874246069_large.mp4' }, // Placeholder
  { id: 2, title: 'Dynamic Interaction', description: 'Reacting to human interference', videoUrl: 'https://cdn.pixabay.com/video/2023/10/22/186115-877666205_large.mp4' }, // Placeholder
];

const BIBTEX = `@article{jia2024video2act,
  title={Video2Act: A Dual-System Video Diffusion Policy with Robotic Spatio-Motional Modeling},
  author={Jia, Yueru and Liu, Jiaming and Liu, Shengbang and Zhou, Rui and Yu, Wanhe and Yan, Yuyang and Chi, Xiaowei and Guo, Yandong and Shi, Boxin and Zhang, Shanghang},
  journal={arXiv preprint arXiv:24xx.xxxxx},
  year={2024}
}`;

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-cyan selection:text-brand-dark font-sans text-gray-100">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Abstract */}
        <Section id="abstract" title="Abstract">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-justify leading-relaxed text-gray-300">
              Generalist robots need to comprehend the physical world and predict the outcome of their actions.
              However, current policies often struggle with the complexity of real-world dynamics and the precise
              coordination required for fine-grained manipulation.
            </p>
            <p className="text-justify leading-relaxed text-gray-300 mt-4">
              In this work, we present <strong>Video2Act</strong>, a novel framework that leverages video diffusion models 
              for robotic policy learning. By modeling both the <span className="text-brand-cyan font-semibold">spatial geometry</span> of the scene 
              and the <span className="text-brand-purple font-semibold">motional dynamics</span> of the robot, our dual-system approach enables 
              more robust and generalized manipulation capabilities. We demonstrate state-of-the-art performance across 
              various simulation benchmarks and real-world robotic tasks.
            </p>
          </div>
          
          {/* Highlight Figure Placeholder */}
          <div className="mt-8 rounded-xl overflow-hidden border border-white/10 shadow-lg">
             <div className="aspect-[16/6] bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center text-gray-500">
                <div className="text-center">
                    <i className="fas fa-image text-4xl mb-2 opacity-50"></i>
                    <p>Teaser / Overview Image</p>
                </div>
             </div>
          </div>
        </Section>

        {/* Video Gallery */}
        <Section id="demos" title="Video Demonstrations" fullWidth>
           <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
             Watch Video2Act in action across diverse manipulation tasks, demonstrating robustness to disturbances and generalization to new objects.
           </p>
           <div className="max-w-4xl mx-auto">
             <VideoCarousel items={DEMO_VIDEOS} />
           </div>
        </Section>

        {/* Method */}
        <Section id="method" title="Methodology">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                 <h3 className="text-2xl font-bold text-white mb-4">Dual-System Architecture</h3>
                 <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                       <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-cyan/20 text-brand-cyan flex items-center justify-center mr-3 mt-1 text-sm">1</span>
                       <span>
                         <strong>Spatial System:</strong> Captures the geometric structure of the environment using a VLA (Vision-Language-Action) foundation model.
                       </span>
                    </li>
                    <li className="flex items-start">
                       <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-purple/20 text-brand-purple flex items-center justify-center mr-3 mt-1 text-sm">2</span>
                       <span>
                         <strong>Motional System:</strong> Predicts fine-grained end-effector trajectories using a specialized video diffusion process.
                       </span>
                    </li>
                 </ul>
              </div>
              <div className="order-1 md:order-2">
                 <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/50 aspect-[4/3] flex items-center justify-center relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 to-brand-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <i className="fas fa-project-diagram text-5xl text-gray-600"></i>
                    <span className="absolute bottom-4 text-sm text-gray-500">Method Architecture Diagram</span>
                 </div>
              </div>
           </div>
        </Section>

        {/* Results */}
        <Section id="results" title="Experiments & Results" fullWidth>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-black/30 rounded-xl overflow-hidden border border-white/5 hover:border-brand-purple/50 transition-colors group">
                   <div className="aspect-video bg-gray-900 relative flex items-center justify-center">
                      <i className="fas fa-play-circle text-4xl text-white/50 group-hover:text-white transition-colors scale-95 group-hover:scale-110 duration-300"></i>
                   </div>
                   <div className="p-4">
                      <h4 className="font-bold text-lg mb-1">Task {i}: Object Sorting</h4>
                      <p className="text-sm text-gray-400">Success Rate: <span className="text-brand-cyan font-mono">94%</span></p>
                   </div>
                </div>
              ))}
           </div>
        </Section>

        {/* BibTeX */}
        <Section id="bibtex" title="Citation">
           <div className="relative group">
              <pre className="bg-[#0d1117] p-6 rounded-xl overflow-x-auto text-sm text-gray-300 font-mono border border-white/10 shadow-inner">
                {BIBTEX}
              </pre>
              <button 
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-md transition-colors opacity-0 group-hover:opacity-100"
                onClick={() => navigator.clipboard.writeText(BIBTEX)}
                title="Copy to Clipboard"
              >
                <i className="far fa-copy"></i>
              </button>
           </div>
        </Section>

      </main>
      
      <footer className="bg-black/80 backdrop-blur-md border-t border-white/5 py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
           <div className="flex justify-center items-center gap-6 mb-8 text-2xl text-gray-500">
              <a href="https://twitter.com" className="hover:text-brand-cyan transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="https://github.com" className="hover:text-white transition-colors"><i className="fab fa-github"></i></a>
              <a href="mailto:contact@example.com" className="hover:text-brand-purple transition-colors"><i className="fas fa-envelope"></i></a>
           </div>
           <p className="text-gray-500 text-sm">
             © {new Date().getFullYear()} Video2Act Project. All rights reserved. <br/>
             Website template designed with <i className="fas fa-heart text-red-500 mx-1"></i> by Video2Act Team.
           </p>
        </div>
      </footer>
    </div>
  );
};

export default App;