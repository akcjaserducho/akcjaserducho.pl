import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logos"></div>
            <div className="footer__navbar">
                <ul className="footer__links"></ul>
                <nav className="footer__menu">
                    <ul className="footer__list"></ul>
                </nav>
            </div>
            <p className="footer__address"></p>
            <p className="footer_copyrights">
            &copy; Akcja Serducho {new Date().getFullYear()}. Wszystkie prawa zastrzeżone<br/>Projekt i wykonanie <span className="site-author">Trojnacki & Draganek</span>
            </p>
        </footer>
    )
}

export default Footer
