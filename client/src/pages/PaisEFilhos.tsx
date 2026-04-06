import { MessageCircle, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

export default function PaisEFilhos() {
  useEffect(() => {
    // Adicionar meta tag noindex para manter a página oculta de buscas orgânicas
    const metaNoindex = document.createElement('meta');
    metaNoindex.name = 'robots';
    metaNoindex.content = 'noindex, nofollow';
    document.head.appendChild(metaNoindex);

    return () => {
      document.head.removeChild(metaNoindex);
    };
  }, []);

  const whatsappLink = "https://wa.me/5547992061060?text=Olá%20Hans,%20gostaria%20de%20saber%20mais%20sobre%20a%20abordagem%20para%20pais%20e%20filhos.";

  return (
    <div className="w-full min-h-screen bg-black-primary">
      {/* Header Minimalista */}
      <header className="w-full bg-black-primary border-b border-gold/20 py-8">
        <div className="container max-w-4xl flex justify-center">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663465649811/hNgYBav8yhTUCKgPCFqVze/EIMILOGO_clean_ace1925d.png"
            alt="EIMÍ"
            className="h-64 w-auto object-contain"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full py-16 md:py-24">
        <div className="container max-w-3xl">
          
          {/* Hero Section */}
          <section className="mb-16">
            <h1 className="font-display text-4xl md:text-5xl text-gold mb-6 leading-tight">
              Seu filho está tendo dificuldades?
            </h1>
            
            <p className="font-body text-lg text-gold mb-6 leading-relaxed">
              A solução pode estar em você.
            </p>
          </section>

          {/* Opening Quote */}
          <section className="mb-16">
            <div className="bg-gray-900/50 border border-gold/20 rounded-lg p-8">
              <p className="font-body text-white leading-relaxed mb-4 italic">
                "Primeiramente, vivemos a vida, e só num segundo momento a compreendemos. Os pais modelam os filhos mais pelo modo como vivem, agem e reagem do que pelos conselhos que lhes dirigem. A dinâmica inconsciente atua antes que a decisão consciente se manifeste. Os filhos tornam-se prolongamento da vida e não apenas da consciência dos pais. ... Os conflitos no relacionamento entre os pais repetem-se no íntimo de cada filho e no seio do próprio lar. Os filhos reencarnam o problema de seus pais, especialmente enquanto a vida é mais maleável, até os seis anos. ...A história vivida pelos pais deixa seus traços no interior dos filhos. Estes assimilam o modelo paterno ou materno na proporção do afeto que os une."
              </p>
              <p className="font-body text-sm text-gray-400">
                (VIDOR, A)
              </p>
            </div>
          </section>

          {/* The Symptom vs Cause */}
          <section className="mb-16">
            <p className="font-body text-lg text-gold leading-relaxed mb-6">
              Frequentemente a dificuldade da criança é apenas um sintoma (é aquilo que aparece aos olhos) de uma causa que permanece oculta. Quando este é o caso, com a Psicoterapia Ontopsicológica identificamos e tratamos a causa real do problema: a dinâmica invisível e atuante do adulto de maior referência afetiva sobre a criança.
            </p>
          </section>

          {/* The Real Problem */}
          <section className="mb-16">
            <h2 className="font-display text-2xl text-gold mb-8">
              O Mal Não Nasce na Criança
            </h2>

            <div className="bg-gray-900/50 border border-gold/20 rounded-lg p-8 mb-6">
              <p className="font-body text-gray-300 leading-relaxed">
                A experiência clínica demonstra que as dificuldades de aprendizado, comportamento e diagnósticos como o TDAH são, frequentemente, reflexos inconscientes do ambiente em que a criança vive, e da postura do adulto de maior referência afetiva.
              </p>
            </div>

            <p className="font-body text-gray-300 leading-relaxed">
              A criança é como um espelho da harmonia ou do conflito de quem a educa. Você já parou para pensar que aquilo que você vê como um "problema" no seu filho pode ser, na verdade, um reflexo de algo que está acontecendo em você?
            </p>
          </section>

          {/* Who is the Adult of Reference */}
          <section className="mb-16">
            <h2 className="font-display text-2xl text-gold mb-8">
              Quem é o adulto de maior referência afetiva, o adulto-mãe?
            </h2>

            <div className="bg-gray-900/50 border border-gold/20 rounded-lg p-8">
              <p className="font-body text-white leading-relaxed mb-4 italic">
                "Para a maioria dos indivíduos pode ser a mãe natural, para outros pode ser uma irmã carnal, outros encontram essa figura no pai, num padre, numa religiosa, etc. Em todos os casos, a figura materna sempre corresponde àquela pessoa ou àquela situação que, no passado, ofereceu o primeiro ponto de apoio ou de segurança externos ao bebê. Mediante esse ponto de apoio externo, a criança consegue sua segurança e aprende a se relacionar com o mundo e a sociedade. ... Portanto, é o adulto que desempenha a função maternal de proteção e amparo tornando-se o centro de gratificações da criança; é o adulto que o pequeno prefere instintivamente em seu relacionamento afetivo, e, por isso mesmo, será sempre sua fonte de consolo. O ambiente atua na criança sempre através do adulto-mãe. ... O inconsciente da mãe influencia de um modo mais acentuado do que sua decisão consciente."
              </p>
              <p className="font-body text-sm text-gray-400 mt-3">
                (VIDOR, A)
              </p>
            </div>
          </section>

          {/* Why Conventional Therapy Often Fails */}
          <section className="mb-16">
            <p className="font-body text-gray-300 leading-relaxed mb-6">
              Tratar apenas a criança é como podar as folhas de uma árvore cuja raíz está doente. Se o adulto-mãe não passar por um processo autêntico de metanóia - mudança de mentalidade e comportamento - a criança permanece presa a padrões que bloqueiam sua inteligência e matam sua personalidade.
            </p>
          </section>

          {/* Our Approach */}
          <section className="mb-16">
            <h2 className="font-display text-2xl text-gold mb-8">
              Nossa Abordagem
            </h2>

            <p className="font-body text-gold leading-relaxed mb-6">
              Tratamos o filho através do adulto ao qual ele está mais ligado afetivamente.
            </p>

            <p className="font-body text-gray-300 leading-relaxed mb-6">
              A partir do método da Ciência Ontopsicológica, buscamos identificar a dinâmica específica que está afetando o desenvolvimento do seu filho (se este for o caso). Quando o adulto de maior referência afetiva entende e muda o seu comportamento, ele possibilita que a criança recupere a sua autenticidade e capacidade natural de aprender e evoluir.
            </p>

            <div className="bg-gold/5 border border-gold/20 rounded-lg p-6">
              <p className="font-body text-white leading-relaxed italic">
                "O mal só se desenvolve na criança quando plantado pelo adulto."
              </p>
              <p className="font-body text-sm text-gray-400 mt-3">
                (VIDOR, A)
              </p>
            </div>
          </section>

          {/* Who This Is For */}
          <section className="mb-16 bg-gold/5 border border-gold/20 rounded-lg p-8">
            <h2 className="font-display text-2xl text-gold mb-6">
              Isso é para você se...
            </h2>

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-gold font-bold text-xl">✓</span>
                <span className="font-body text-gray-300">Seu filho tem dificuldades de aprendizado que não melhoram com reforço escolar;</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold font-bold text-xl">✓</span>
                <span className="font-body text-gray-300">Há conflitos comportamentais ou emocionais que parecem não ter solução;</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold font-bold text-xl">✓</span>
                <span className="font-body text-gray-300">Você sente que há algo mais profundo acontecendo, mas não sabe o quê;</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold font-bold text-xl">✓</span>
                <span className="font-body text-gray-300">Você está aberto a explorar como suas próprias questões podem estar afetando seu filho;</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold font-bold text-xl">✓</span>
                <span className="font-body text-gray-300">Você quer resultados reais, não apenas mais uma tentativa que não vai funcionar;</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold font-bold text-xl">✓</span>
                <span className="font-body text-gray-300">Você está pronto para fazer uma mudança profunda em si mesmo.</span>
              </li>
            </ul>
          </section>

          {/* CTA Section - PRONTO PARA COMEÇAR (MANTÉM COMO ESTÁ) */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-gold/10 to-gold/5 border-2 border-gold rounded-lg p-10 text-center">
              <h2 className="font-display text-3xl text-gold mb-4">
                Pronto para começar?
              </h2>
              
              <p className="font-body text-gray-300 mb-8 leading-relaxed">
                Marque uma conversa inicial com Hans Horstmann. Vamos explorar a situação do seu filho e descobrir como você pode ser o catalisador dessa transformação.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-black-primary font-semibold rounded-lg hover:bg-gold/90 transition-all transform hover:scale-105"
              >
                <MessageCircle size={20} />
                Agendar Conversa no WhatsApp
                <ArrowRight size={20} />
              </a>

              <p className="font-body text-sm text-gray-400 mt-6">
                Resposta em até 2 horas durante o horário comercial
              </p>
            </div>
          </section>

          {/* About Hans Horstmann - MANTÉM COMO ESTÁ */}
          <section className="mb-16">
            <h2 className="font-display text-2xl text-gold mb-8 text-center">
              Sobre Hans Horstmann
            </h2>
            
            <div className="bg-gray-900/50 border border-gold/20 rounded-lg p-8">
              <p className="font-body text-gray-300 leading-relaxed mb-4">
                Possui graduação em <span className="text-gold font-semibold">Teologia</span> pela Faculdade de Teologia da Igreja Evangélica de Confissão Luterana no Brasil (1985), tendo atuado por 6 anos no ministério pastoral.
              </p>

              <p className="font-body text-gray-300 leading-relaxed">
                Graduação em <span className="text-gold font-semibold">Ontopsicologia</span> pela Antonio Meneghetti Faculdade (2019), atuando desde então como psicoterapeuta.
              </p>
            </div>
          </section>

          {/* Final CTA - MANTÉM COMO ESTÁ */}
          <section className="text-center mb-16">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-black-primary font-semibold rounded-lg hover:bg-gold/90 transition-all transform hover:scale-105"
            >
              <MessageCircle size={20} />
              Conversar com Hans no WhatsApp
            </a>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-black-primary border-t border-gold/20 py-8 mt-24">
        <div className="container max-w-4xl text-center">
          <p className="font-body text-sm text-gray-400">
            © 2026 EIMÍ - Hans Horstmann. Todos os direitos reservados.
          </p>
          <p className="font-body text-xs text-gray-500 mt-4">
            Esta página foi criada especificamente para pais que buscam soluções reais baseadas na Ontopsicologia.
          </p>
          <p className="font-body text-xs text-gray-500 mt-3">
            <span className="font-semibold">Referências Bibliográficas:</span>
          </p>
          <p className="font-body text-xs text-gray-500 mt-2">
            MENEGHETTI, A. Manual de Ontopsicologia, 4ª edição. Ontopsicológica Editora Universitária, 2010 - Recanto Maestro - RS.
          </p>
          <p className="font-body text-xs text-gray-500 mt-2">
            VIDOR, A. Relação entre Pais e Filhos - a origem dos problemas, 2ª edição. Ontopsicológica Editora Universitária, 2014 - Recanto Maestro - RS.
          </p>
        </div>
      </footer>
    </div>
  );
}
