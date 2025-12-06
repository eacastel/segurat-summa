import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer id="contacto" className="bg-gray-100 text-gray-800 pt-12 pb-6 mt-20 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Columna 1: Info y Logos */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <h3 className="text-2xl font-bold text-summa-blue">Segurat - Summa Insurance</h3>
            
            {/* Logos conjuntos */}
            <div className="flex items-center space-x-4 bg-white p-2 rounded-lg w-fit">
               <StaticImage src="../images/summa-insurance-logo.png" alt="Summa Insurance" className="w-24" />
               <span className="text-xs font-bold text-gray-400">OPERADOR DE <br/>SUMMA INSURANCE</span>
            </div>

            <div className="text-md leading-relaxed">
                <p>Plaça d'Ausiàs March, 5, Bajo</p>
                <p>12590 Almenara, Castellón</p>
                <a href="tel:+34621160190" className="text-summa-blue font-bold text-lg hover:underline mt-2 block">
                Tel. +34 621 160 190
                </a>
            </div>
            
            <div className="text-sm">
                <p className="font-bold text-summa-lime uppercase">Horario de apertura:</p>
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
            ></iframe>
          </div>
        </div>

        <div className="text-center mt-10 pt-4 border-t border-gray-300 text-sm text-gray-500">
          © {new Date().getFullYear()}, Todos los derechos reservados SEGURAT.
        </div>
      </div>
    </footer>
  )
}

export default Footer