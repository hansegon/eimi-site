export default function Servicos() {
  return (
    <section id="servicos" className="w-full py-20 bg-white">
      <div className="container max-w-4xl">
        <h2 className="font-display text-4xl text-black-primary mb-12 text-center">
          SERVIÇOS
        </h2>

        <p className="font-body text-lg text-gray-700 text-center mb-12 italic">
          Investigação e Funcionalidade do Ser
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Psicoterapia */}
          <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-gold">
            <h3 className="font-display text-xl text-gold mb-4">Psicoterapia Ontopsicológica</h3>
            <p className="font-body text-gray-700 leading-relaxed">
              Atendimento individual focado na identificação e superação de complexos e dinâmicas inconscientes. Através do uso do critério ontopsicológico, auxilia-se o indivíduo a retomar a sua saúde e a funcionalidade original, alinhando sua vida à verdade do seu próprio ser.
            </p>
          </div>

          {/* Consultoria */}
          <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-gold">
            <h3 className="font-display text-xl text-gold mb-4">Consultoria Individual ao Líder</h3>
            <p className="font-body text-gray-700 leading-relaxed">
              Suporte estratégico para profissionais e tomadores de decisão. O foco é o desenvolvimento da intuição racional e da capacidade de gestão, permitindo que o líder atue com precisão e unidade de ação em seus contextos de vida e negócios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
