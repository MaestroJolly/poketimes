import React from 'react';

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">
                    Poke'Times
                </a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;