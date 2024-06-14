import React from "react";

const Footer = () => {
  return (
    <footer  id="contacto" className="bg-gray-200 text-black p-6 rounded-xl my-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="col-span-1 ">

        <h3 className="text-xl font-bold mb-2">Segurat - Summa Insurance</h3>
          <p>Plaça d'Ausiàs March, 5, Bajo, 12590 Almenara, Castellón</p>
          <p>
            <a href="tel:+32621160190" className="text-blue-700 no-underline font-bold underline-no hover:text-blue-500">
              Tel. +34 621160190
            </a>
          </p>
          <p className="mt-4 mb-2 font-bold">Horario de apertura:</p>
          <p>Lunes a Viernes: 8:30–14:00, 17:00–19:30 PM</p>
          <p>Sabado: 10:00–12:00 </p>
          <p>Domingo: Cerrado</p>
        </div>


        <div className="col-span-1 md:col-span-2">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.338197729429!2d-0.228640387504477!3d39.75451449555762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60133deb1a9a49%3A0x24a284542d8040d3!2sSegurat%20-%20Summa%20Insurance!5e0!3m2!1sen!2ses!4v1703852466573!5m2!1sen!2ses"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>


      </div>

      <div className="text-center mt-6">
        © {new Date().getFullYear()}, Todos los derechos reservados SEGURAT.
      </div>
    </footer>
  );
};

export default Footer;
