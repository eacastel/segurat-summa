import React from "react"

const CtaSection = () => {
  return (
    <section className="py-20 bg-[#003B5C] relative overflow-hidden">
      {/* Decorative blurred circle */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          ¿Necesitas asesoramiento personalizado?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
          Analizamos tus riesgos y te ofrecemos las mejores opciones en calidad-precio. Sin compromiso.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#contacto" 
            className="px-8 py-4 bg-[#B4BE0F] text-white font-bold text-lg rounded-lg shadow-lg hover:bg-[#a3ac0d] transition-transform duration-300 transform hover:-translate-y-1"
          >
            Solicitar Presupuesto
          </a>
          <a 
            href="tel:+34621160190" 
            className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-[#003B5C] transition-colors duration-300"
          >
            Llamar Ahora
          </a>
        </div>
      </div>
    </section>
  )
}

export default CtaSection