import React from "react"

const WhatsAppButton = () => {
  const phoneNumber = "34621160190"
  const message = "Hola, me gustaría recibir información sobre vuestros seguros."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-8 right-8 z-[9999]">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="Chat on WhatsApp"
      >
        {/* Official WhatsApp SVG Icon */}
        <svg 
            viewBox="0 0 32 32" 
            className="w-9 h-9 fill-white"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M19.11 17.205c-.307-.153-1.814-.895-2.095-.997-.282-.102-.487-.153-.692.153-.205.307-.795.997-.974 1.204-.18.205-.359.231-.667.077-.307-.154-1.296-.477-2.469-1.522-.917-.818-1.536-1.829-1.715-2.136-.18-.307-.019-.473.134-.626.138-.138.307-.359.461-.538.154-.18.205-.307.307-.512.103-.205.051-.385-.025-.538-.077-.154-.692-1.666-.948-2.281-.25-.599-.503-.518-.692-.527-.18-.009-.385-.011-.59-.011-.205 0-.538.077-.82.385-.282.307-1.077 1.05-1.077 2.562 0 1.511 1.101 2.972 1.255 3.177.154.205 2.169 3.308 5.253 4.639 2.057.888 2.859.897 3.86.843 1.114-.06 2.456-1.004 2.802-1.974.346-.97.346-1.802.243-1.974-.102-.172-.384-.275-.691-.428zM16.002 0C7.165 0 .002 7.162.002 16c0 2.822.735 5.536 2.133 7.962L.162 32l8.156-2.138A15.895 15.895 0 0 0 16.002 32C24.838 32 32 24.838 32 16S24.838 0 16.002 0z"/>
        </svg>
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg font-medium">
          WhatsApp
        </span>
      </a>
    </div>
  )
}

export default WhatsAppButton