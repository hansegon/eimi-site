import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663465649811/hNgYBav8yhTUCKgPCFqVze/QuadroQuatroIlhas_2c2fc080.jpeg';

interface CarouselPage {
  id: number;
  title: string;
  subtitle: string;
  backgroundPositionY: string;
}

const pages: CarouselPage[] = [
  {
    id: 1,
    title: 'PSICOTERAPIA INDIVIDUAL',
    subtitle: '"Reencontro do verdadeiro ôntico pessoal"',
    backgroundPositionY: 'center -2%',
  },
  {
    id: 2,
    title: 'CONSULTORIA DE AUTENTICAÇÃO',
    subtitle: '"Recuperação da inteligência da alma em sentido laico e racional"',
    backgroundPositionY: 'center +30%',
  },
  {
    id: 3,
    title: 'PSICOSSOMÁTICA',
    subtitle: '"Causa psíquica e efeito somático"',
    backgroundPositionY: 'center +50%',
  },
];

export default function HomeCarousel() {
  const [currentPage, setCurrentPage] = useState(0);

  // Auto-play: muda de imagem a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev === pages.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
      className="w-full h-screen bg-no-repeat relative pt-40 md:pt-0 overflow-hidden transition-all duration-700 bg-cover bg-center md:bg-fixed"
      style={{
        backgroundImage: `url(${HERO_IMAGE})`,
        backgroundAttachment: 'auto',
        backgroundSize: 'cover',
        backgroundPosition: currentPageData.backgroundPositionY,
      }}
    >
      {/* Overlay suave */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Indicadores (Bolinhas) - Parte Inferior Centro */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-40 flex gap-4">
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
      <div className="absolute bottom-24 md:bottom-12 left-4 md:left-12 z-20 max-w-xs md:max-w-md">
        <h2
          className="text-2xl md:text-4xl font-bold mb-2 transition-all duration-1000"
          style={{
            color: '#D4AF37',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5)',
            fontFamily: "'Playfair Display', serif",
            letterSpacing: '0.05em',
            opacity: 1,
            animation: 'fadeIn 1s ease-in-out',
          }}
        >
          {currentPageData.title}
        </h2>
        <p
          className="text-xs md:text-sm font-light transition-all duration-1000 italic"
          style={{
            color: '#D4AF37',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 6px rgba(0, 0, 0, 0.5)',
            fontFamily: "'Montserrat', sans-serif",
            letterSpacing: '0.02em',
            opacity: 1,
            animation: 'fadeIn 1.2s ease-in-out 0.2s both',
          }}
        >
          {currentPageData.subtitle}
        </p>
      </div>

      {/* Animação CSS para fade-in */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Indicador de Página Atual */}
      <div className="absolute bottom-6 md:bottom-12 right-4 md:right-12 z-20 text-gold/70 text-xs md:text-sm font-light" style={{ animation: 'fadeIn 1s ease-in-out' }}>
        {currentPage + 1} / {pages.length}
      </div>
    </section>
  );
}
