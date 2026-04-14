import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'INÍCIO', id: 'home' },
    { label: 'ESSÊNCIA', id: 'essencia' },
    { label: 'HANS HORSTMANN', id: 'hans' },
    { label: 'SERVIÇOS', id: 'servicos' },
    { label: 'CONTATO', id: 'contato' },
  ];

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Header - Tarja Horizontal */}
      <header className={`hidden md:flex fixed left-0 right-0 bg-black-primary h-40 z-50 items-stretch px-0 shadow-lg transition-all duration-300 ${isScrolled ? 'top-0' : 'top-6'}`}>
        {/* Logo à Esquerda - Ocupando Toda a Altura */}
        <div className="flex items-center px-8">
          <button
            onClick={() => handleNavigate('home')}
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663465649811/hNgYBav8yhTUCKgPCFqVze/WhatsAppImage2026-04-10at16.51.52_833cf2c1.jpeg"
              alt="EIMÍ - Centro de Terapia Ontopsicológica"
              className="h-32 w-auto object-contain"
            />
          </button>
        </div>

        {/* Menu Horizontal - Parte Superior ao Lado */}
        <nav className="flex-1 flex items-start justify-end pt-6 px-12 gap-10">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className="text-gold font-cormorant text-sm tracking-wider hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
          {/* Instagram Link */}
          <a
            href="https://instagram.com/eimi_psicoterapia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:opacity-70 transition-opacity flex items-center"
          >
            <Instagram size={20} />
          </a>
        </nav>
      </header>

      {/* Mobile Header com Menu Hambúrguer */}
      <header className={`md:hidden fixed top-0 left-0 right-0 bg-black-primary z-50 flex items-center justify-between px-4 py-3 shadow-lg transition-all duration-300 ${isScrolled ? 'h-20' : 'h-28'}`}>
        {/* Logo */}
        <button
          onClick={() => handleNavigate('home')}
          className="hover:opacity-80 transition-opacity flex-shrink-0"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663465649811/hNgYBav8yhTUCKgPCFqVze/WhatsAppImage2026-04-10at16.51.52_833cf2c1.jpeg"
            alt="EIMÍ - Centro de Terapia Ontopsicológica"
            className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-16' : 'h-24'}`}
          />
        </button>

        {/* Menu Hambúrguer */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gold hover:opacity-70 transition-opacity flex-shrink-0"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden fixed top-28 left-0 right-0 bg-black-primary z-40 flex flex-col gap-0 shadow-lg animate-in fade-in duration-200 max-h-[calc(100vh-7rem)] overflow-y-auto">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`text-gold font-body text-sm font-semibold tracking-wider hover:bg-gold/10 transition-colors text-left px-6 py-4 border-b border-gold/10 ${
                index === menuItems.length - 1 ? '' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
          
          {/* Instagram Link in Mobile Menu */}
          <a
            href="https://instagram.com/eimi_psicoterapia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold font-body text-sm font-semibold tracking-wider hover:bg-gold/10 transition-colors px-6 py-4 flex items-center gap-2"
          >
            <Instagram size={18} />
            Instagram
          </a>
        </nav>
      )}
    </>
  );
}
