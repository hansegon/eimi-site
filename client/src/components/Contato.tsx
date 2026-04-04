import { MapPin, MessageCircle, Mail, Instagram } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Usar Formspree para enviar o formulário
      const response = await fetch('https://formspree.io/f/mlgopqjj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        toast.error('Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contato" className="w-full py-20 bg-black-primary">
      <div className="container max-w-6xl">
        <h2 className="font-display text-3xl text-gold mb-12 text-center">
          CONTATO
        </h2>

        {/* Layout com duas colunas: Informações à esquerda, Formulário à direita */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* COLUNA ESQUERDA: Logo e Informações */}
          <div className="flex flex-col items-center">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663465649811/hNgYBav8yhTUCKgPCFqVze/EIMILOGO_clean_ace1925d.png"
                alt="EIMÍ"
                className="h-56 w-auto object-contain"
              />
            </div>

            {/* Informações de Contato */}
            <div className="flex flex-col space-y-6 w-full">
              {/* Endereço */}
              <div className="flex items-start gap-4">
                <MapPin className="text-gold flex-shrink-0 mt-1" size={24} />
                <div>
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

              {/* Instagram */}
              <div className="flex items-center gap-4">
                <Instagram className="text-gold flex-shrink-0" size={24} />
                <div>
                  <a
                    href="https://instagram.com/eimi_psicoterapia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-gold hover:opacity-80 transition-opacity"
                  >
                    @eimi_psicoterapia
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: Formulário */}
          <div className="flex flex-col justify-start">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nome */}
              <div>
                <label htmlFor="name" className="block font-body text-gold text-sm mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black-primary border-2 border-gold rounded text-gold placeholder-gold/60 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-body text-gold text-sm mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black-primary border-2 border-gold rounded text-gold placeholder-gold/60 focus:outline-none focus:border-gold transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Telefone */}
              <div>
                <label htmlFor="phone" className="block font-body text-gold text-sm mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black-primary border-2 border-gold rounded text-gold placeholder-gold/60 focus:outline-none focus:border-gold transition-colors"
                  placeholder="(55) 99999-9999"
                />
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="message" className="block font-body text-gold text-sm mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-black-primary border-2 border-gold rounded text-gold placeholder-gold/60 focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>

              {/* Botão Enviar */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-gold text-black-primary font-semibold rounded hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
          </div>
        </div>

        {/* Mapa Grande */}
        <div className="rounded-lg overflow-hidden shadow-lg h-96 w-full mb-12">
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
        <div className="pt-8 border-t border-gold/20 text-center">
          <p className="font-body text-sm text-gray-400">
            © 2026 EIMÍ - Hans Horstmann. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
}
