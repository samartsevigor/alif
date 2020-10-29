import React from 'react';
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
       <header>
           <div className="container d-flex align-center justify-between">
               <Link to="/" className="top-nav__item" className="logo">
                   <img src="/images/logo.png" alt=""/>
               </Link>
               <nav className="top-nav">
                   <Link to="/" className="top-nav__item">Welcome</Link>
                   <Link to="/about" className="top-nav__item">About Us</Link>
                   <Link to="/menu" className="top-nav__item">Menu</Link>
                   <Link to="/gallery" className="top-nav__item">Gallery</Link>
                   <Link to="/contacts" className="top-nav__item">Find Us</Link>
               </nav>
           </div>
       </header>
    );
};

export default Header;