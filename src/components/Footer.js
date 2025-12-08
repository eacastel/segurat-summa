import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import horchataLogo from "../images/horchata-logo.svg"

const Footer = () => {
  return (
    <footer
      id="contacto"
      className="bg-gray-100 text-gray-800 pt-12 pb-6 mt-20 border-t border-gray-200"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Columna 1: Info y Logos */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <h3 className="text-2xl font-bold text-summa-blue">
              Segurat - Summa Insurance
            </h3>

            {/* Logos conjuntos */}
            <div className="flex items-center space-x-4 bg-white p-2 rounded-lg w-fit">
              <StaticImage
                src="../images/summa-insurance-logo.png"
                alt="Summa Insurance"
                className="w-24"
              />
              <span className="text-xs font-bold text-gray-400">
                OPERADOR DE <br />
                SUMMA INSURANCE
              </span>
            </div>

            <div className="text-md leading-relaxed">
              <p>Plaça d&apos;Ausiàs March, 5, Bajo</p>
              <p>12590 Almenara, Castellón</p>
              <a
                href="tel:+34621160190"
                className="text-summa-blue font-bold text-lg hover:underline mt-2 block"
              >
                Tel. +34 621 160 190
              </a>
            </div>

            <div className="text-sm">
              <p className="font-bold text-summa-lime uppercase">
                Horario de apertura:
              </p>
              <p>Lunes a Viernes: 8:30–14:00, 17:00–19:30</p>
              <p>Sábado: 10:00–12:00</p>
              <p>Domingo: Cerrado</p>
            </div>
          </div>

          {/* Columna 2: Mapa */}
          <div className="md:col-span-8 h-64 md:h-full rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://maps.google.com/maps?q=Pla%C3%A7a%20d'Ausi%C3%A0s%20March,%205,%2012590%20Almenara,%20Castell%C3%B3n&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Ubicación Segurat"
            />
          </div>
        </div>

        {/* LEGAL LINKS ROW (add this here) */}
        <div className="mt-10 pt-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500">
            <nav className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2">
              <Link to="/aviso-legal" className="hover:text-brand-black transition-colors">
                Aviso legal
              </Link>
              <span className="hidden sm:inline text-gray-300">|</span>
              <Link to="/politica-de-privacidad" className="hover:text-brand-black transition-colors">
                Política de privacidad
              </Link>
              <span className="hidden sm:inline text-gray-300">|</span>
              <Link to="/cookies" className="hover:text-brand-black transition-colors">
                Cookies
              </Link>
            </nav>

            <div className="text-center sm:text-right">
              <span className="text-gray-400">Jesús Gomis SL</span>
              <span className="mx-2 text-gray-300">·</span>
              <span>Almenara (Castellón)</span>
            </div>
          </div>
        </div>

        {/* COPYRIGHT + HORCHATA ROW (keep as-is, now it’s the second row) */}
        <div className="mt-6 pt-4 border-t border-gray-300 mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()}, Todos los derechos reservados SEGURAT.
          </div>

          <div className="text-xs text-gray-500 flex items-center justify-center sm:justify-end gap-1">
            Desarrollo digital por{" "}
            <a
              href="https://horchatalabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gray-400 hover:text-neon-cyan transition-colors duration-300 flex items-center gap-1 group"
              aria-label="Visitar Horchata Labs, desarrolladores del sitio"
            >
              <img
                src={horchataLogo}
                alt="Horchata Labs Logo"
                className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300 -mt-[4px]"
              />
              Horchata Labs
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
