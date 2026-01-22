import { useState, useEffect } from 'react';
import {
  Navbar,
  Hero,
  MarketOverview,
  CompanyProfiles,
  CompetitiveAnalysis,
  InvestmentRecommendations,
  Outlook2026,
  Footer,
} from './components';

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'market', 'companies', 'analysis', 'outlook'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track mouse position for card glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.card-glow');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <MarketOverview />
        <CompanyProfiles />
        <CompetitiveAnalysis />
        <InvestmentRecommendations />
        <Outlook2026 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
