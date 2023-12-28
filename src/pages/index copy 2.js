import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container mx-auto px-4">
      <h1 className="text-xxl font-semibold my-3 py-8">
        Especialistas en seguros personales, patrimoniales y agrarios en
        Almenara, Castellón y Valencia.
      </h1>
      {/* Image and Text Wrapper */}
      <div className="md:flex md:items-center md:space-x-4">
        <div className="flex justify-center md:w-1/3">
          <StaticImage
            src="../images/almenara-pueblo-cropped.jpeg"
            alt="Seguros Patrimoniales"
            className="rounded-lg shadow-md w-full md:max-w-xs lg:max-w-sm"
          />
        </div>
        <div className="md:w-2/3">
          <h3 className="text-lg font-semibold my-2">
            Comparativas de seguros y asesoramiento personalizado
          </h3>
          <p className="my-4">
            En Segurat - Summa Insurance te ayudamos a encontrar las mejores
            pólizas de seguros en Almenara, Castellón y Valencia. Ahorra en tu
            seguro con asesoría personalizada y profesional por expertos en
            seguros personales, patrimoniales y agrarios.
          </p>
          <p className="my-4">
            Somos una correduría de seguros especializada en ofrecer un
            asesoramiento personalizado y profesional. Contamos con una amplia
            experiencia en el sector, trabajamos con las compañías líderes del
            mercado y te ofrecemos una amplia gama de seguros para auto, hogar,
            vida, salud, decesos, comerciales, agrarios y más. También
            tramitamos tus siniestros y gestionamos tu seguro contratado.
          </p>
        </div>
      </div>

      <h3>Nuestros servicios incluyen: </h3>
      <ul>
        <li>Comparativa de seguros de diferentes compañías; </li>
        <li>
          Asesoramiento personalizado sobre las coberturas más recomendables;{" "}
        </li>
        <li>Oferta de las mejores opciones en calidad precio; </li>
        <li>Tramitación de siniestros; </li>
        <li>Gestión de seguros contratados;</li>
        <li>Confianza, Servicio, y Calidad.</li>
      </ul>
      <p>
        Si estás buscando el mejor seguro para tus necesidades, comparar precios
        y beneficios, contacta con nosotros hoy mismo. En Summa Insurance -
        Segurat te ayudaremos a elegir la mejor opción.
      </p>

      <h2 className="text-xl font-semibold my-3">
        Seguros Particulares y Personales
      </h2>
      
      <div className="flex flex-wrap -mx-2">
  <div className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
    <div className="bg-white shadow-md rounded-lg p-4 my-4">
      <h3 className="text-xl font-semibold">Soluciones para la proteccion del patrimonio:</h3>
      <ul className="list-disc pl-5">
        <li><strong>Seguros de autos:</strong> seguros de coche, seguros de motocicletas y ciclomotores, seguros de camiones y tractores</li>
        <li><strong>Seguros para la vivienda:</strong> seguro de hogar, protección de alquileres</li>
        <li><strong>Seguros de edificios de viviendas</strong></li>
        <li><strong>Seguros de embarcaciones de recreo</strong></li>
      </ul>
    </div>
  </div>

  <div className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
    <div className="bg-white shadow-md rounded-lg p-4 my-4">
      <h3 className="text-xl font-semibold">Soluciones para la proteccion personal:</h3>
      <ul className="list-disc pl-5">
        <li><strong>Seguros de salud:</strong> asistencia sanitaria, reembolso, indemnización, dental</li>
        <li><strong>Seguros de vida riesgo y accidentes</strong></li>
        <li><strong>Seguros de decesos</strong></li>
      </ul>
    </div>
  </div>

  <div className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
    <div className="bg-white shadow-md rounded-lg p-4 my-4">
      <h3 className="text-xl font-semibold">Soluciones para viajes y ocio:</h3>
      <ul className="list-disc pl-5">
        <li><strong>Seguros de viaje y ocio:</strong> responsabilidad civil del cazador y pescador, seguro de bicicletas y patín y asistencia en viaje</li>
      </ul>
    </div>
  </div>

  <div className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
    <div className="bg-white shadow-md rounded-lg p-4 my-4">
      <h3 className="text-xl font-semibold">Soluciones aseguradoras adicionales</h3>
      <ul className="list-disc pl-5">
        <li><strong>Responsabilidad civil general familiar</strong></li>
        <li><strong>Seguro de animales de compañía</strong></li>
        <li><strong>Seguro para caballos</strong></li>
      </ul>
    </div>
  </div>
</div>


      <h2 className="text-xl font-semibold my-3">
        Seguros agrarios | Agroseguros
      </h2>
      <div className="bg-white shadow-md rounded-lg p-4 my-4 flex flex-col lg:flex-row">
        <div className="lg:w-1/3 mb-4 lg:mb-0 lg:mr-4">
          <StaticImage
            src="../images/agroseguros-valencia-castellon-almenara.png"
            alt="Seguros Patrimoniales"
            className="w-72 lg:w-72 rounded-lg shadow-md" // 200px on small screens, 450px on large screens
          />
        </div>
        <div className="lg:w-2/3">
          <p>
            Agroseguro: Contratación de los diferentes módulos existentes en las
            líneas de aseguramiento agrícola. Trabajo de peritaje, evaluación de
            condiciones de terreno, etc. Coberturas para cítricos, caqui,
            aguacate, etc. Servicio post-venta personalizado, acompañando al
            perito en las tasaciones de daños. Seguros de explotaciones
            ganaderas.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
