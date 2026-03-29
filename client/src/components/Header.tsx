import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <header className="fixed top-6 left-0 right-0 bg-black-primary h-56 z-50 flex items-stretch px-0 shadow-lg rounded-b-lg">
        {/* Logo à Esquerda - Ocupando Toda a Altura */}
        <div className="flex items-center justify-center w-auto px-8">
          <button
            onClick={() => handleNavigate('home')}
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663465649811/hNgYBav8yhTUCKgPCFqVze/EIMILOGO_clean_ace1925d.png"
              alt="EIMÍ - Centro de Terapia Ontopsicológica"
              className="h-56 w-auto object-contain"
            />
          </button>
        </div>

        {/* Menu Horizontal - Parte Superior ao Lado */}
        <nav className="flex-1 flex items-start justify-start pt-6 px-12 gap-10">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className="text-gold font-body text-sm font-semibold tracking-wider hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="fixed top-4 left-0 right-0 bg-black-primary z-50 hidden flex-col items-center justify-center py-4 shadow-lg rounded-b-lg">
        <div className="flex items-center justify-between w-full px-4 mb-2">
          <button
            onClick={() => handleNavigate('home')}
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663465649811/hNgYBav8yhTUCKgPCFqVze/EIMILOGO_clean_ace1925d.png"
              alt="EIMÍ - Centro de Terapia Ontopsicológica"
              className="h-32 w-auto object-contain"
            />
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gold hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="fixed top-40 left-0 right-0 bg-black-primary hidden z-40 flex-col gap-4 p-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className="text-gold font-body text-sm font-semibold tracking-wider hover:opacity-70 transition-opacity text-left"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </>
  );
}
