import React, {useState} from 'react';
import {Link} from 'gatsby';
import links from '../constants/links';

const Navbar = () => {
    const [isOpen, setNav] = useState(false);
    const toggleNav = () => {
        setNav(isOpen => !isOpen);
    }

    return (
        <div className="navbar">
            <div className="navbar__header">
                <Link to="/">Logo</Link>

                <button type="button" aria-label="menu" title="menu" className={isOpen ? "navbar__hamburger navbar__hamburger--open" : "navbar__hamburger"} onClick={toggleNav}>
                    <span className="hamburger__box">
                        <span className="hamburger__inner">X</span>
                    </span>
                </button>

            </div>

            <div className={isOpen ? "navbar__menu navbar__menu--open" : "navbar__menu"}>
                {/* <ul className="menu__icons"></ul> */}

                <nav className="menu__links">
                    <ul className="menu__list">
                        {links.map((link, index) => {
                            return(
                                <li key={index} className="menu__item">
                                    <Link className="menu__link" to={link.path}>{link.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

            </div>
        </div>
    )
}

export default Navbar
