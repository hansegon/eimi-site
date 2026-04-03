import { MapPin, MessageCircle, Mail } from 'lucide-react';

export default function Contato() {
  return (
    <section id="contato" className="w-full py-20 bg-black-primary">
      <div className="container max-w-6xl">
        <h2 className="font-display text-3xl text-gold mb-6 text-center">
          CONTATO
        </h2>

        {/* Logo Centralizada */}
        <div className="flex justify-center mb-6">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663465649811/hNgYBav8yhTUCKgPCFqVze/EIMILOGO_clean_ace1925d.png"
            alt="EIMÍ"
            className="h-64 w-auto object-contain"
          />
        </div>

        {/* Informações de Contato Centralizadas */}
        <div className="flex flex-col items-center justify-center space-y-4 mb-8">
          {/* Endereço */}
          <div className="flex items-center gap-4">
            <MapPin className="text-gold flex-shrink-0" size={24} />
            <div className="text-center">
              <p className="font-body text-gold leading-relaxed">
                Rua Aubé, 777/12 - Boa Vista<br />
                89205-000 Joinville - SC
              </p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-4">
            <MessageCircle className="text-gold flex-shrink-0" size={24} />
            <div>
              <a
                href="https://wa.me/5547992061060"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-gold hover:opacity-80 transition-opacity"
              >
                (55 47) 992 061 060
              </a>
            </div>
          </div>

          {/* E-mail */}
          <div className="flex items-center gap-4">
            <Mail className="text-gold flex-shrink-0" size={24} />
            <div>
              <a
                href="mailto:hans@eimi-psicoterapia.com.br"
                className="font-body text-gold hover:opacity-80 transition-opacity"
              >
                hans@eimi-psicoterapia.com.br
              </a>
            </div>
          </div>
        </div>

        {/* Mapa Grande */}
        <div className="rounded-lg overflow-hidden shadow-lg h-96 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.8!2d-49.2770!3d-26.3050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4a8e8e8e8e9%3A0x1234567890abcdef!2sRua%20Aub%C3%A9%2C%20777%20-%20Boa%20Vista%2C%20Joinville%20-%20SC%2089205-000%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1704067200000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
