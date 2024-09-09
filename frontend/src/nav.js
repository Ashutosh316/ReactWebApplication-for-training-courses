import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (path, elementId) => {
    navigate(path);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu on link click
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-default'}`}>
      <div className="container-fluid">
        <div className="navbar-header">
          <button className="navbar-toggler" type="button" onClick={toggleMobileMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink to="/" className="navbar-brand">
            <img src="oml.png" alt="OML Logo" className="nav-logo" />
            <span className="brand-text">
              <span className="open-mind">OPEN MIND</span> <span className="learning">LEARNING</span>
            </span>
          </NavLink>
        </div>
        <ul className={`nav-menu ${isMobileMenuOpen ? 'show' : ''}`}>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleNavLinkClick("/", "welcome-section")}>Home</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleNavLinkClick("/about", "about-section")}>About Us</button>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" role="button">Services</span>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" onClick={() => handleNavLinkClick("/services", "services-section")}>Carrier Options</button></li>
              <li><button className="dropdown-item" onClick={() => handleNavLinkClick("/services", "services-section")}>International Certifications</button></li>
              <li><button className="dropdown-item" onClick={() => handleNavLinkClick("/services", "services-section")}>Zed Certifications</button></li>
              <li><button className="dropdown-item" onClick={() => handleNavLinkClick("/services", "services-section")}>Placement Services</button></li>
              <li><button className="dropdown-item" onClick={() => handleNavLinkClick("/services", "services-section")}>Foreign Languages</button></li>
              <li><button className="dropdown-item" onClick={() => handleNavLinkClick("/services", "services-section")}>Personality Development</button></li>
              <li><button className="dropdown-item" onClick={() => handleNavLinkClick("/services", "services-section")}>Communication Skill Training</button></li>
            </ul>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleNavLinkClick("/coursecarousel", "courses-section")}>Courses</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleNavLinkClick("/associates", "associates-section")}>Our Associates</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleNavLinkClick("/form", "contact-section")}>Contact Us</button>
          </li>
          {/* <li className="nav-item">
            <button className="nav-link" onClick={() => handleNavLinkClick("/login", "contact-section")}>Login</button>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
