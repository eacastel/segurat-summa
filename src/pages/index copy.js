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
      <div className="my-4 flex justify-center">
        <StaticImage
          src="../images/seguros-patrimoniales-valencia-almenara-castellon.png"
          alt="Seguros Patrimoniales"
          className="rounded-lg shadow-md w-full md:w-auto md:h-auto mobile-square"
        />
      </div>
      <h3 className="text-lg font-semibold my-2">
        Comparativas de seguros y asesoramiento personalizado
      </h3>
      <p className="my-4">
        En Segurat - Summa Insurance te ayudamos a encontrar las mejores pólizas
        de seguros en Almenara, Castellón y Valencia. Ahorra en tu seguro con
        asesoría personalizada y profesional por expertos en seguros personales,
        patrimoniales y agrarios.
      </p>
      <p className="my-4">
        Somos una correduría de seguros especializada en ofrecer un
        asesoramiento personalizado y profesional. Contamos con una amplia
        experiencia en el sector, trabajamos con las compañías líderes del
        mercado y te ofrecemos una amplia gama de seguros para auto, hogar,
        vida, salud, decesos, comerciales, agrarios y más. También tramitamos
        tus siniestros y gestionamos tu seguro contratado.
      </p>

      <h3>Nuestros servicios incluyen: </h3>
      <ul>
        <li>Comparativa de seguros de diferentes compañías; </li>
        <li>Asesoramiento personalizado sobre las coberturas más recomendables; </li>
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
        Seguros personales y patrimoniales
      </h2>
      <div className="bg-white shadow-md rounded-lg p-4 my-4">
        <ul className="list-disc pl-5">
          <li>
            <strong>Auto:</strong> Seguros de terceros básico, terceros ampliado
            y todo riesgo con y sin franquicia. Coberturas para responsabilidad
            civil, robo, incendio, lunas, seguro del conductor, fenómenos
            atmosféricos, colisión con animales cinegéticos, vehículo de
            sustitución, subsidio por privación de carnet, defensa jurídica y en
            multas.
          </li>
          <li>
            <strong>Hogar:</strong> Seguros de incendio, daños meteorológicos,
            daños por agua, daños eléctricos, control de plagas, asistencia en
            el hogar, robo, responsabilidad civil, tanto a continente como a
            contenido.
          </li>
          <li>
            <strong>Vida:</strong> Seguros de fallecimiento por cualquier causa,
            incapacidad absoluta y permanente, doble capital por fallecimiento
            accidental, gastos de sepelio.
          </li>
          <li>
            <strong>Salud:</strong> Seguros de salud con y sin copago.
            Coberturas para hospitalización, cirugía, urgencias, asistencia
            médica, etc.
          </li>
          <li>
            <strong>Decesos:</strong> Seguros de decesos a precios muy
            ajustados. Servicios añadidos de asistencia informática, asistencia
            médica y asistencia en el hogar.
          </li>
        </ul>
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
