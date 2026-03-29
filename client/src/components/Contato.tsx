import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contato() {
  return (
    <section id="contato" className="w-full py-20 bg-black-primary">
      <div className="container max-w-6xl">
        <h2 className="font-display text-4xl text-gold mb-16 text-center">
          CONTATO
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Lado Esquerdo - Logo e Informações */}
          <div className="flex flex-col justify-start">
            {/* Logo EIMÍ */}
            <div className="mb-12">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663465649811/hNgYBav8yhTUCKgPCFqVze/EIMILOGO_clean_ace1925d.png"
                alt="EIMÍ"
                className="h-32 w-auto object-contain mb-4"
              />
              <p className="font-body text-sm text-gold font-semibold">CENTRO DE TERAPIA ONTOPSICOLÓGICA</p>
            </div>

            {/* Lista de Contato */}
            <div className="space-y-8">
              {/* Endereço */}
              <div className="flex gap-4">
                <MapPin className="text-gold flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-body text-gray-300 leading-relaxed">
                    Rua Aubé, 777/12 - Boa Vista<br />
                    89205-000 Joinville - SC
                  </p>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex gap-4">
                <Phone className="text-gold flex-shrink-0 mt-1" size={24} />
                <div>
                  <a
                    href="tel:+5547992061060"
                    className="font-body text-gold hover:opacity-80 transition-opacity"
                  >
                    (55 47) 992 061 060
                  </a>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex gap-4">
                <Mail className="text-gold flex-shrink-0 mt-1" size={24} />
                <div>
                  <a
                    href="mailto:eimi.psicoterapia@eimipsicoterapia.com.br"
                    className="font-body text-gold hover:opacity-80 transition-opacity"
                  >
                    eimi.psicoterapia@eimipsicoterapia.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito - Mapa */}
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.3467890123456!2d-49.2769!3d-26.3047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4a8e8e8e8e9%3A0x1234567890abcdef!2sRua%20Aub%C3%A9%2C%20777%2F12%20-%20Boa%20Vista%2C%20Joinville%20-%20SC%2089205-000!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gold/20 text-center">
          <p className="font-body text-sm text-gray-400">
            © 2026 EIMÍ - Hans Horstmann. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
}
