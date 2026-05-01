import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import WorkspaceSection from './components/WorkspaceSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <WorkspaceSection />
        <ContactSection />
      </main>
    </>
  );
}

export default App;
