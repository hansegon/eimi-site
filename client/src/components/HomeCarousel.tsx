import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663465649811/hNgYBav8yhTUCKgPCFqVze/geniobrasiliano_067f4aba.jpg';

interface CarouselPage {
  id: number;
  title: string;
  subtitle: string;
  backgroundPosition: string;
}

const pages: CarouselPage[] = [
  {
    id: 1,
    title: 'PSICOTERAPIA INDIVIDUAL',
    subtitle: 'Reencontro do verdadeiro ôntico pessoal',
    backgroundPosition: 'center',
  },
  {
    id: 2,
    title: 'CONSULTORIA DE AUTENTICAÇÃO',
    subtitle: 'Recuperação da inteligência da alma em sentido laico e racional',
    backgroundPosition: 'left center',
  },
  {
    id: 3,
    title: 'PSICOSSOMÁTICA',
    subtitle: 'Causa psíquica e efeito somático',
    backgroundPosition: 'right center',
  },
];

export default function HomeCarousel() {
  const [currentPage, setCurrentPage] = useState(0);

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? pages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev === pages.length - 1 ? 0 : prev + 1));
  };

  const goToPage = (index: number) => {
    setCurrentPage(index);
  };

  const currentPageData = pages[currentPage];

  return (
    <section
      id="home"
      className="w-full h-screen bg-no-repeat relative pt-20 md:pt-0 overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_IMAGE})`,
        backgroundAttachment: 'fixed',
        backgroundSize: '200%',
        backgroundPosition: currentPageData.backgroundPosition,
      }}
    >
      {/* Overlay suave */}
      <div className="absolute inset-0 bg-black/5"></div>

      {/* Indicadores (Bolinhas) - Parte Inferior Centro */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-40 flex gap-4">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              index === currentPage
                ? 'w-4 h-4 bg-gold border-4 border-gold'
                : 'w-4 h-4 bg-gold border-0'
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>

      {/* Setas de Navegação */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 z-30 pointer-events-none">
        <button
          onClick={goToPrevious}
          className="pointer-events-auto bg-black-primary/50 hover:bg-black-primary/70 text-gold p-3 rounded-full transition-all"
          aria-label="Previous page"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={goToNext}
          className="pointer-events-auto bg-black-primary/50 hover:bg-black-primary/70 text-gold p-3 rounded-full transition-all"
          aria-label="Next page"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Conteúdo no Canto Inferior Esquerdo */}
      <div className="absolute bottom-12 left-12 z-20 max-w-md">
        <h2
          className="text-4xl font-bold mb-2 transition-all duration-500"
          style={{
            color: '#D4AF37',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5)',
            fontFamily: "'Playfair Display', serif",
            letterSpacing: '0.05em',
          }}
        >
          {currentPageData.title}
        </h2>
        <p
          className="text-sm font-light transition-all duration-500"
          style={{
            color: '#D4AF37',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 6px rgba(0, 0, 0, 0.5)',
            fontFamily: "'Montserrat', sans-serif",
            letterSpacing: '0.02em',
          }}
        >
          {currentPageData.subtitle}
        </p>
      </div>

      {/* Indicador de Página Atual */}
      <div className="absolute bottom-12 right-12 z-20 text-gold/70 text-sm font-light">
        {currentPage + 1} / {pages.length}
      </div>
    </section>
  );
}
