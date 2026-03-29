import { useRef } from 'react';
import Header from '@/components/Header';
import HomeCarousel from '@/components/HomeCarousel';
import Essencia from '@/components/Essencia';
import Hans from '@/components/Hans';
import Servicos from '@/components/Servicos';
import Contato from '@/components/Contato';

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const essenciaRef = useRef<HTMLDivElement>(null);
  const hansRef = useRef<HTMLDivElement>(null);
  const servicosRef = useRef<HTMLDivElement>(null);
  const contatoRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: string) => {
    const refs: { [key: string]: React.RefObject<HTMLDivElement | null> } = {
      home: homeRef,
      essencia: essenciaRef,
      hans: hansRef,
      servicos: servicosRef,
      contato: contatoRef,
    };

    const ref = refs[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      <Header onNavigate={handleNavigate} />

      {/* Adiciona padding no topo para compensar o header fixo */}
      <div ref={homeRef as any} className="pt-0">
        <HomeCarousel />
      </div>

      <div ref={essenciaRef as any}>
        <Essencia />
      </div>

      <div ref={hansRef as any}>
        <Hans />
      </div>

      <div ref={servicosRef as any}>
        <Servicos />
      </div>

      <div ref={contatoRef as any}>
        <Contato />
      </div>
    </div>
  );
}
