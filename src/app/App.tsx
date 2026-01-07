import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PracticeAreas } from './components/PracticeAreas';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
