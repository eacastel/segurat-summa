import { Link } from "gatsby"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState, useEffect, useMemo } from "react"

const Header = ({ siteTitle }) => {
  const [isExpanded, toggleExpansion] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  // Prefilled WhatsApp message
  const waText = useMemo(
    () => encodeURIComponent("Hola Segurat, vengo de vuestra web y me gustaría información."),
    []
  )
  const waHref = `https://wa.me/34621160190?text=${waText}`

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window === "undefined") return

      const currentY = window.scrollY

      // hide on scroll down
      if (currentY > lastScrollY && currentY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      // shrink background after small scroll
      setIsScrolled(currentY > 50)

      setLastScrollY(currentY)
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar, { passive: true })
      return () => window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScrollY])

  const closeMobile = () => toggleExpansion(false)

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-300 shadow-sm ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-white/95 backdrop-blur-sm py-2" : "bg-white py-4"}`}
    >
      <div className="container mx-auto max-w-7xl px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center no-underline text-black">
          <div className={`transition-all duration-300 ${isScrolled ? "w-32" : "w-48 md:w-56"}`}>
            <StaticImage
              src="../images/segurat-logo-002.png"
              alt="Segurat Summa Logo"
              placeholder="blurred"
              layout="constrained"
              width={300}
              loading="eager"
            />
          </div>
        </Link>

        {/* Desktop Menu (use <a href="/#id"> for anchors) */}
        <div className="hidden md:flex items-center space-x-8 font-bold text-brand-black">
          <a
            href="/#seguros-patrimoniales"
            className="hover:text-brand-orange transition uppercase text-sm tracking-wide"
          >
            Particulares
          </a>
          <a
            href="/#seguros-empresariales"
            className="hover:text-brand-orange transition uppercase text-sm tracking-wide"
          >
            Empresas
          </a>
          <a
            href="/#agroseguros"
            className="hover:text-brand-orange transition uppercase text-sm tracking-wide"
          >
            Agroseguros
          </a>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp-green text-white px-4 py-2 rounded-lg hover:bg-green-600 transition shadow-sm flex items-center gap-2 text-sm font-medium"
            aria-label="Contactar por WhatsApp"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="block md:hidden border border-summa-blue p-2 rounded text-summa-blue"
          aria-label="Abrir menú"
          aria-expanded={isExpanded}
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (use <a> anchors too) */}
      <div
        className={`${
          isExpanded ? "block" : "hidden"
        } md:hidden bg-white border-t border-gray-100 px-4 pt-4 pb-4 shadow-inner`}
      >
        <a href="/#seguros-patrimoniales" className="block py-3 text-summa-blue font-bold border-b border-gray-100" onClick={closeMobile}>
          PARTICULARES
        </a>
        <a href="/#seguros-empresariales" className="block py-3 text-summa-blue font-bold border-b border-gray-100" onClick={closeMobile}>
          EMPRESAS
        </a>
        <a href="/#agroseguros" className="block py-3 text-summa-blue font-bold border-b border-gray-100" onClick={closeMobile}>
          AGROSEGUROS
        </a>
        <a href="/#contacto" className="block py-3 text-summa-lime font-bold border-b border-gray-100" onClick={closeMobile}>
          CONTACTO
        </a>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full bg-whatsapp-green text-white px-4 py-3 rounded-lg hover:bg-green-600 transition shadow-sm flex items-center justify-center gap-2 text-sm font-medium"
          onClick={closeMobile}
        >
          <span>WhatsApp</span>
        </a>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
