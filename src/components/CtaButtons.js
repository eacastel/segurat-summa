import React from "react"

export const WhatsAppButton = ({ text = "WhatsApp", className = "" }) => (
  <a
    href="https://wa.me/34621160190?text=Hola%20Segurat,%20vengo%20de%20vuestra%20web%20y%20me%20gustar%C3%ADa%20informaci%C3%B3n."
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center bg-whatsapp-green text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition transform hover:-translate-y-1 ${className}`}
  >
    {/* WhatsApp Logo SVG */}
    <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
    {text}
  </a>
)

export const PhoneButton = ({ text = "Llámanos ahora", className = "" }) => (
  <a
    href="tel:+34621160190"
    className={`inline-flex items-center justify-center bg-brand-orange text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-brand-orange-hover transition transform hover:-translate-y-1 ${className}`}
  >
    <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
       <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.49-5.48-4.14-6.97-6.97l1.97-1.57c.26-.26.35-.63.24-1.01a17.43 17.43 0 01-.56-3.53.98.98 0 00-1-.98H4.02a.98.98 0 00-.98.98c0 9.4 7.6 17 17 17a.98.98 0 00.98-.98v-3.55a.98.98 0 00-.98-.98z"/>
    </svg>
    {text}
  </a>
)