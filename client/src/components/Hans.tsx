export default function Hans() {
  return (
    <section id="hans" className="w-full py-20 bg-gray-50">
      <div className="container max-w-4xl">
        <h2 className="font-display text-4xl text-black-primary mb-12 text-center">
          HANS HORSTMANN
        </h2>

        <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm border border-gray-200">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Foto */}
            <div className="md:w-1/3 flex-shrink-0">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663465649811/hNgYBav8yhTUCKgPCFqVze/FotoPerfil_dd4b1be4.jpg"
                alt="Hans Horstmann"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Texto */}
            <div className="md:w-2/3">
              <p className="font-body text-lg text-gray-700 leading-relaxed mb-6">
                Possui graduação em <span className="font-semibold">Teologia</span> pela Faculdade de Teologia da Igreja Evangélica de Confissão Luterana no Brasil (1985), atuando por 6 anos no ministério pastoral.
              </p>

              <p className="font-body text-lg text-gray-700 leading-relaxed">
                Graduação em <span className="font-semibold">Ontopsicologia</span> pela Faculdade Antonio Meneghetti (2019), atuando desde então como <span className="font-semibold">psicoterapeuta</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
