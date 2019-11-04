import React from "react";
import Layout from '../components/Layout';
import { Link } from "gatsby";

const IndexPage = () => (
  <Layout>
      <main className="homepage page">

        <section className="hero">
          <div className="hero__main">
            <h2 className="hero__title section__title">Fundacja Akcja Serducho</h2>
            <p className="hero__text section__text">Osoby z wielkimi sercami podejmują sie pracy z młodzieżą i ich rodzinami, którzy w swoim życiu doświadczyli wielu trudności.</p>
            <Link to="/wesprzyj-nas" className="btn">Zobacz, jak możesz pomóc</Link>
          </div>
          <div className="hero__subsection">
            <p className="hero__text section__text">
            Wierzymy, że ci, do których chcemy wyjść i o których pragniemy powalczyć mają w sobie ogromny potencjał, który jest jednak zasłonięty cierpieniem, wyuczoną bezradnością, poczuciem beznadziejności czy brakiem wiary w siebie.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">Komu i jak pomagamy?</h2>

          <section className="subsection">
            <h3 className="subsection__title">Prowadzimy Centrum Młodzieżowe "Przystań"</h3>
            <p className="subsection__text">Miejsce odkrywania siebie, swoich zainteresowań, miejsce rozwoju, kształtowania poczucia własnej wartości, miejsce nadziei i pewnego spoglądania w przyszłość! Miejsce bezpieczne, życzliwe, kreatywne!</p>
            <Link to="/przystan" className="btn">Poznaj "Przystań"</Link>
          </section>

          <section className="subsection">
            <h3 className="subsection__title">Wesoło, produktywnie i inspirująco</h3>
            <p className="subsection__text">Oferujemy młodzieży możliwość uczestnictwa w spotkaniach, warsztatach, wyjściach czy wyjazdach. Pragniemy rozwijać ich pasje, zainteresowania, uczyć ich wzajemnego szacunku i otwartości na drugiego człowieka, a jednocześnie wspierać ich w codziennych zmaganiach zwłaszcza w szkole (pomoc w nauce).</p>
            <Link to="/o-fundacji" className="btn">Dowiedz się więcej</Link>
          </section>

        </section>

        <section className="section">
          <h2 className="section__title">Potrzebujesz pomocy?</h2>
          <p className="section__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias facere perferendis sint, similique consectetur ducimus temporibus eligendi alias ratione quae pariatur quos magnam cum.</p>
          <Link to="/kontakt" className="btn">Skontaktuj się z nami</Link>
        </section>

        <section className="section">
          <h2 className="section__title">Dlaczego możesz nam zaufać?</h2>
          <p className="section__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias facere perferendis sint, similique consectetur ducimus temporibus eligendi alias ratione quae pariatur quos magnam cum.</p>
          <Link to="/zespol" className="btn">Poznaj nasz zespół</Link>
        </section>

        <section className="section">
          <h2 className="section__title">Kto nas wspiera?</h2>
        </section>

        <section className="section">
          <h2 className="section__title">Z kim współpracujemy?</h2>
        </section>

      </main>
  </Layout>
)

export default IndexPage
