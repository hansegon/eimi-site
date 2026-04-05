import { MessageCircle, ArrowRight } from 'lucide-react';

export default function PaisEFilhos() {
  const whatsappLink = "https://wa.me/5547992061060?text=Olá%20Hans,%20gostaria%20de%20saber%20mais%20sobre%20a%20abordagem%20para%20pais%20e%20filhos.";

  return (
    <div className="w-full min-h-screen bg-black-primary">
      {/* Header Minimalista */}
      <header className="w-full bg-black-primary border-b border-gold/20 py-6">
        <div className="container max-w-4xl">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663465649811/hNgYBav8yhTUCKgPCFqVze/EIMILOGO_clean_ace1925d.png"
            alt="EIMÍ"
            className="h-16 w-auto object-contain"
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
            
            <p className="font-body text-lg text-gray-300 mb-6 leading-relaxed">
              Você já tentou tudo: aulas de reforço, psicólogos, medicações... mas nada parece funcionar de verdade?
            </p>

            <p className="font-body text-lg text-gray-300 mb-8 leading-relaxed">
              A verdade que poucos falam é que <span className="text-gold font-semibold">as dificuldades da criança frequentemente refletem algo que está acontecendo no mundo adulto</span>.
            </p>
          </section>

          {/* The Real Problem */}
          <section className="mb-16 bg-gray-900/50 border border-gold/20 rounded-lg p-8">
            <h2 className="font-display text-2xl text-gold mb-6">
              O Problema Real
            </h2>

            <div className="space-y-6">
              <div>
                <p className="font-body text-gray-300 leading-relaxed mb-4">
                  Quando uma criança não aprende, não se comporta bem ou está emocionalmente instável, geralmente <span className="text-gold">não é um problema da criança</span>.
                </p>
                <p className="font-body text-gray-300 leading-relaxed">
                  É um sinal de que algo precisa ser resolvido no <span className="text-gold font-semibold">adulto de referência</span> — aquele que a criança mais observa e imita.
                </p>
              </div>

              <div className="border-t border-gold/20 pt-6">
                <p className="font-body text-gray-300 leading-relaxed">
                  Quando o adulto resolve seus conflitos internos, suas inseguranças e suas contradições, <span className="text-gold font-semibold">a criança naturalmente muda</span>.
                </p>
              </div>
            </div>
          </section>

          {/* The Approach */}
          <section className="mb-16">
            <h2 className="font-display text-2xl text-gold mb-8">
              A Abordagem Ontopsicológica
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-display text-lg text-gold mb-2">
                  Não tratamos apenas a criança
                </h3>
                <p className="font-body text-gray-300 leading-relaxed">
                  Trabalhamos com você, o adulto, para identificar e resolver os padrões inconscientes que estão afetando seu filho.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-display text-lg text-gold mb-2">
                  Focamos na causa, não no sintoma
                </h3>
                <p className="font-body text-gray-300 leading-relaxed">
                  Em vez de tentar "corrigir" o comportamento da criança, descobrimos e tratamos a raiz do problema.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-display text-lg text-gold mb-2">
                  Resultados reais e duradouros
                </h3>
                <p className="font-body text-gray-300 leading-relaxed">
                  Quando o adulto se transforma, a criança se transforma naturalmente. Não é mágica — é ciência.
                </p>
              </div>
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
                <span className="font-body text-gray-300">Seu filho tem dificuldades de aprendizado que não melhoram com reforço escolar</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold font-bold text-xl">✓</span>
                <span className="font-body text-gray-300">Há conflitos comportamentais ou emocionais que parecem não ter solução</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold font-bold text-xl">✓</span>
                <span className="font-body text-gray-300">Você sente que há algo mais profundo acontecendo, mas não sabe o quê</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold font-bold text-xl">✓</span>
                <span className="font-body text-gray-300">Você está aberto a explorar como suas próprias questões podem estar afetando seu filho</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold font-bold text-xl">✓</span>
                <span className="font-body text-gray-300">Você quer resultados reais, não apenas mais uma tentativa que não vai funcionar</span>
              </li>
            </ul>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-gold/10 to-gold/5 border-2 border-gold rounded-lg p-10 text-center">
              <h2 className="font-display text-3xl text-gold mb-4">
                Pronto para uma mudança real?
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

          {/* Trust Section */}
          <section className="mb-16 text-center">
            <h3 className="font-display text-lg text-gold mb-6">
              Sobre Hans Horstmann
            </h3>
            
            <p className="font-body text-gray-300 leading-relaxed mb-4">
              Formado em <span className="text-gold font-semibold">Ontopsicologia</span> pela Antonio Meneghetti Faculdade, Hans trabalha com pais e filhos há anos, ajudando famílias a resolver problemas que pareciam impossíveis.
            </p>

            <p className="font-body text-gray-300 leading-relaxed">
              Sua abordagem é baseada em ciência, não em teorias genéricas. Resultados comprovados.
            </p>
          </section>

          {/* Final CTA */}
          <section className="text-center">
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
          <p className="font-body text-xs text-gray-500 mt-2">
            Esta página foi criada especificamente para pais que buscam soluções reais.
          </p>
        </div>
      </footer>
    </div>
  );
}
