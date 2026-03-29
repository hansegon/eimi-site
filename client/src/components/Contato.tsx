export default function Contato() {
  return (
    <section id="contato" className="w-full py-20 bg-black-primary">
      <div className="container max-w-4xl">
        <h2 className="font-display text-4xl text-gold mb-12 text-center">
          CONTATO
        </h2>

        <div className="bg-gray-900 rounded-lg p-8 md:p-12 border border-gold/20">
          <p className="font-body text-lg text-gray-300 text-center mb-8">
            Para agendar uma sessão ou obter mais informações sobre os serviços oferecidos, entre em contato:
          </p>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {/* Email */}
            <div className="text-center">
              <p className="font-body text-sm text-gray-400 mb-2">E-mail</p>
              <a
                href="mailto:contato@eimi.com.br"
                className="font-display text-gold text-lg hover:opacity-80 transition-opacity"
              >
                contato@eimi.com.br
              </a>
            </div>

            {/* Separador */}
            <div className="hidden md:block w-px h-12 bg-gold/30"></div>

            {/* WhatsApp */}
            <div className="text-center">
              <p className="font-body text-sm text-gray-400 mb-2">WhatsApp</p>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-gold text-lg hover:opacity-80 transition-opacity"
              >
                (11) 99999-9999
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gold/20">
            <p className="font-body text-sm text-gray-400 text-center">
              © 2026 EIMÍ - Hans Horstmann. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
