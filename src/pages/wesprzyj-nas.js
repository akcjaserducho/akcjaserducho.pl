import React from 'react';
import Layout from '../components/Layout';
import {Link} from 'gatsby';

const support = () => {
    return (
        <Layout>
            <main className="page support">
                <header className="page__header">
                    <h1 className="header__title">Okaż serducho!</h1>
                    <p className="header__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores distinctio doloremque dolor officia magnam, delectus unde repellendus atque qui officiis.</p>
                </header>

                <div className="support__options">
                    <section className="support__option support__option-first">
                        <h2 className="support-option__title option-first__title">Wsparcie finansowe</h2>
                        <p className="support-option__text option-first__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque facilis ipsum dolorum tempora reprehenderit ea iusto deleniti quas modi aliquid.</p>
                        <a href="https://www.siepomaga.pl/akcjaserducho" className="btn option-first__btn">Się Pomaga</a>
                        <a href="https://fanimani.pl/akcjaserducho/" className="btn option-first__btn">faniMani</a>
                    </section>

                    <section className="support__option support__option-second">
                        <h2 className="support-option__title option-second__title">Dołącz do wolontariatu</h2>
                        <p className="support-option__text option-second__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque facilis ipsum dolorum tempora reprehenderit ea iusto deleniti quas modi aliquid.</p>
                        <Link to="/zespol" className="btn option-second__btn">Dołącz do nas</Link>
                    </section>

                    <section className="support__option support__option-third">
                        <h2 className="support-option__title option-second__title">Powiedz o nas</h2>
                        <p className="support-option__text option-third__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque facilis ipsum dolorum tempora reprehenderit ea iusto deleniti quas modi aliquid.</p>
                        <a href="https://pl-pl.facebook.com/pages/category/Nonprofit-Organization/Akcja-Serducho-1615710775391633/" className="btn option-third__btn">Sprawdź nasz Facebook</a>
                    </section>
                </div>
            </main>
        </Layout>
    )
}

export default support
