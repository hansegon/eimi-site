export default function Essencia() {
  return (
    <section id="essencia" className="w-full py-20 bg-white">
      <div className="container max-w-4xl">
        <h2 className="font-display text-4xl text-black-primary mb-12 text-center">
          ESSÊNCIA
        </h2>

        {/* Propósito */}
        <div className="mb-16">
          <h3 className="font-display text-2xl text-gold mb-6">Propósito</h3>
          <p className="font-body text-lg text-gray-700 leading-relaxed mb-4">
            Auxiliar o humano que decidiu por um percurso de autoconhecimento. Afinal, o problema substancial do homem é que ele não conhece a si mesmo. Se não sabe a sua realidade interna, como pode pretender conhecer a realidade que mede?
          </p>
          <p className="font-body text-lg text-gray-700 leading-relaxed italic mb-4">
            "Não é verdade que o homem é como se pensa; ele é como é, mas depois paga por como se pensa" (MENEGHETTI, A).
          </p>
          <p className="font-body text-lg text-gray-700 leading-relaxed">
            Nosso objetivo é que o homem chegue à plena consciência de quem ele verdadeiramente é, à evidência do "eu sou" (<span className="text-gold font-semibold">eimí</span>, em grego).
          </p>
        </div>

        {/* Diferencial */}
        <div className="mb-16">
          <h3 className="font-display text-2xl text-gold mb-6">Diferencial</h3>
          <p className="font-body text-lg text-gray-700 leading-relaxed mb-4">
            Toda investigação ontopsicológica parte do uso conjunto das três descobertas da Ontopsicologia: o <span className="font-semibold">Em Si ôntico</span>, o <span className="font-semibold">campo semântico</span> e o <span className="font-semibold">monitor de deflexão</span>. É imprescindível que o psicoterapeuta seja capaz de ler a intencionalidade da <span className="font-semibold">psiqué</span> (ψυχή) daquele que tem diante de si.
          </p>
          <p className="font-body text-lg text-gray-700 leading-relaxed">
            Sem esta precisão, estamos separados da verdade que o outro é = <span className="italic">"eu sou"</span>.
          </p>
        </div>

        {/* Valores */}
        <div>
          <h3 className="font-display text-2xl text-gold mb-6">Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-gold pl-6">
              <h4 className="font-display text-lg text-black-primary mb-2">Racionalidade</h4>
              <p className="font-body text-gray-700">A busca pela evidência objetiva.</p>
            </div>
            <div className="border-l-4 border-gold pl-6">
              <h4 className="font-display text-lg text-black-primary mb-2">Funcionalidade</h4>
              <p className="font-body text-gray-700">O compromisso com o que gera vida e resultado.</p>
            </div>
            <div className="border-l-4 border-gold pl-6">
              <h4 className="font-display text-lg text-black-primary mb-2">Identidade</h4>
              <p className="font-body text-gray-700">O respeito absoluto à natureza original de cada indivíduo (<span className="font-semibold">Em Si ôntico</span>).</p>
            </div>
            <div className="border-l-4 border-gold pl-6">
              <h4 className="font-display text-lg text-black-primary mb-2">Ética</h4>
              <p className="font-body text-gray-700">Conformidade com as leis que regem a vida e o desenvolvimento humano.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
