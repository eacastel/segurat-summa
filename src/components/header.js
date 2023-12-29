import { Link } from "gatsby";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";

  // Style for the CTA button
  const ctaButtonStyle = {
    backgroundColor: '#b4be0f', // Normal background color
    color: 'white', // Text color
    padding: '0.5rem 1rem', // Padding
    borderRadius: '0.375rem', // Tailwind's rounded-md equivalent
    textDecoration: 'none', // Remove underline
  };

  // Style for the hover state
  const ctaButtonHoverStyle = {
    backgroundColor: '#074875', // Hover background color
  };


function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-white relative">
      {/* Logo with Left Alignment */}
      <div className="absolute left-0 top-10 md:top-6 z-10 px-6 py-2 m:py-0">
        <StaticImage
          src="../images/segurat-logo-002.png"
          alt="Segurat Summa Logo"
          className="w-56 md:w-72"
        />
      </div>

      {/* Navigation Bar */}
      <div className="pt-16 md:pt-20">
        <div className="flex justify-end items-center px-6 py-4 bg-gray-200 rounded-t-lg">
          {/* Hamburger Menu Button */}
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="px-3 py-2 border border-gray-200 rounded text-gray-200 border-gray-700 hover:text-white hover:border-white md:hidden"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M0 3h24v2H0V3zm0 6h24v2H0V9zm0 6h24v2H0v-2z" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-end items-center px-6 py-2 bg-gray-200">
        <div className="flex-grow flex justify-center items-center space-x-4">
          <Link to="/seguros-patrimoniales" className="text-gray-700 hover:text-gray-500 align-middle">SEGUROS PERSONALES</Link>
          <Link to="/agroseguros" className="text-gray-700 hover:text-gray-500 align-middle pr-8 pd:mr-8 lg:pr-8">AGROSEGUROS</Link>
        </div>
        <Link to="/contacto" style={ctaButtonStyle} className="hover:no-underline" onMouseEnter={(e) => e.currentTarget.style.backgroundColor = ctaButtonHoverStyle.backgroundColor} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ctaButtonStyle.backgroundColor}>CONTACTO</Link>
      </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isExpanded ? "block" : "hidden"} bg-gray-200 px-6 pt-4 pb-2 md:hidden`}>
          <Link to="/seguros-patrimoniales" className="block text-gray-700 hover:text-gray-500 py-1">SEGUROS PERSONALES</Link>
          <Link to="/agroseguros" className="block text-gray-700 hover:text-gray-500 py-1 ">AGROSEGUROS</Link>
          <Link to="/contacto" className="block text-gray-700 hover:text-gray-500 py-1">CONTACTO</Link>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};

export default Header;
