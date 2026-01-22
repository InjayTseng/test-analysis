import { useState, useEffect } from 'react';
import { TrendingUp, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'market', label: 'Market' },
  { id: 'companies', label: 'Companies' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'analysis', label: 'Analysis' },
  { id: 'outlook', label: '2026 Outlook' },
];

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border border-slate-200 shadow-lg'
          : 'bg-transparent border border-transparent'
      } rounded-2xl`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg border border-blue-200">
              <TrendingUp className="w-5 h-5 text-accent-blue" />
            </div>
            <div>
              <span className="font-bold text-slate-900">Prediction Markets</span>
              <span className="text-xs text-slate-600 block">Intelligence Report</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-accent-blue'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Report Badge */}
          <div className="hidden md:flex items-center gap-3">
            <span className="badge badge-blue">Q1 2026</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl rounded-b-2xl">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-accent-blue'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
