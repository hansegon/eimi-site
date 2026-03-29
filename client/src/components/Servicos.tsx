export default function Servicos() {
  return (
    <section id="servicos" className="w-full py-20 bg-white">
      <div className="container max-w-4xl">
        <h2 className="font-display text-4xl text-black-primary mb-12 text-center">
          SERVIÇOS
        </h2>

        <div className="space-y-8">
          {/* Psicoterapia Individual */}
          <div className="border-l-4 border-gold pl-6">
            <h3 className="font-display text-2xl text-gold mb-3">Psicoterapia Individual</h3>
            <p className="font-body text-lg text-gray-700 leading-relaxed italic">
              "reencontro do verdadeiro ôntico pessoal"
            </p>
          </div>

          {/* Consultoria de Autenticação */}
          <div className="border-l-4 border-gold pl-6">
            <h3 className="font-display text-2xl text-gold mb-3">Consultoria de Autenticação</h3>
            <p className="font-body text-lg text-gray-700 leading-relaxed italic">
              "recuperação da inteligência da alma em sentido laico e racional"
            </p>
          </div>

          {/* Psicossomática */}
          <div className="border-l-4 border-gold pl-6">
            <h3 className="font-display text-2xl text-gold mb-3">Psicossomática</h3>
            <p className="font-body text-lg text-gray-700 leading-relaxed italic">
              "Causa psíquica com efeito somático"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
