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
      {/* Desktop Header */}
      <header className="fixed top-0 left-0 right-0 bg-black-primary h-20 z-50 hidden md:flex items-center justify-between px-8 shadow-lg">
        {/* Logo */}
        <div className="flex-shrink-0">
          <button
            onClick={() => handleNavigate('home')}
            className="text-gold font-display text-2xl hover:opacity-80 transition-opacity"
          >
            EIMÍ
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="flex gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className="text-gold font-body text-sm font-semibold tracking-wider hover:opacity-70 transition-opacity"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 bg-black-primary h-16 z-50 md:hidden flex items-center justify-between px-4 shadow-lg">
        <button
          onClick={() => handleNavigate('home')}
          className="text-gold font-display text-xl"
        >
          EIMÍ
        </button>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gold"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="fixed top-16 left-0 right-0 bg-black-primary md:hidden z-40 flex flex-col gap-4 p-6">
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
