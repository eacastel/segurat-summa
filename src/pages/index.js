import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import HeroSlider from "../components/heroSlider"
import ContactButton from "../components/contactButton"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Segurat - Summa Insurance | Especialistas en seguros personales, patrimoniales y agrarios en Almenara, Castellón y Valencia." 
    image="../images/segurat-summa-insurance-512-w.png" />
    <HeroSlider />

    <div className="container mx-auto px-2">
      <div className="bg-opacity-70 w-full text-center p-2 md:my-2">
        <h1 className="text-2xl md:text-3xl font-bold uppercase ">
          Seguros particulares, empresariales y agrarios en Almenara, Castellón
          y Valencia.
        </h1>
      </div>
      <ContactButton />
      {/* Image and Text Wrapper */}

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:mt-0">
        {/* Main Content (2/3 of the page on wide screens) */}
        <div className="md:col-span-3">
          <h3 className="text-lg font-semibold my-2 md:pt-6">
            Ofrecemos comparativas de seguros y asesoramiento personalizado
          </h3>
          <p className="my-4">
            En Segurat - Summa Insurance te ayudamos a encontrar las mejores
            pólizas de seguros en Almenara, Castellón y Valencia. Ahorra en tu
            seguro con asesoría personalizada y profesional por expertos en
            seguros particulares, personales, empresariales, patrimoniales y
            agrarios.
          </p>
          <p className="my-4">
            Somos corredores de seguros especializados en ofrecer un
            asesoramiento personalizado y profesional. Contamos con una amplia
            experiencia en el sector, trabajamos con las compañías líderes del
            mercado y te ofrecemos una amplia gama de seguros para auto, hogar,
            vida, salud, decesos, comerciales, agrarios y más. También
            tramitamos tus siniestros y gestionamos tu seguro contratado.
          </p>
          
        </div>

        {/* Checkmark Items (1/3 of the page on wide screens) */}
        <div className="md:col-span-2 flex flex-col">
          {["SEGUROS PERSONALES", "SEGUROS EMPRESARIALES", "AGROSEGUROS"].map(
            (item, index) => (
              <div key={index} className="flex items-center my-4">
                <StaticImage
                  src="../images/check-box-segurat.png"
                  alt="checkmark"
                  className="w-20 h-20 mr-4 " // Added h-12 and object-cover
                />
                <div className="text-xl font-semibold">{item}</div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="md:flex md:items-center md:space-x-4 mt-16">
        <div className="flex justify-center md:w-1/3">
        <StaticImage
      src="../images/almenara-pueblo-cropped.jpeg"
      alt="Seguros Patrimoniales"
      className="rounded-lg shadow-md w-full h-64 md:h-auto md:max-w-xs lg:max-w-sm object-cover"
    />
        </div>
        <div className="md:w-2/3 mt-8 md:mt-0 pl-6">
          <h3 className="text-xl font-semibold m-2 uppercase">
            Nuestros servicios incluyen:{" "}
          </h3>
          <ul>
            <li>Comparativa de seguros de diferentes compañías; </li>
            <li>
              Asesoramiento personalizado sobre las coberturas más
              recomendables;{" "}
            </li>
            <li>Oferta de las mejores opciones en calidad precio; </li>
            <li>Tramitación de siniestros; </li>
            <li>Gestión de seguros contratados;</li>
            <li>Confianza, Servicio, y Calidad.</li>
          </ul>
          <p>
            Si estás buscando el mejor seguro para tus necesidades, comparar
            precios y beneficios, contacta con nosotros hoy mismo. En Summa
            Insurance - Segurat te ayudaremos a elegir la mejor opción.
          </p>
        </div>
      </div>

      {/* Seguros Particulares */}

      <div id="seguros-patrimoniales" className="bg-lime-50 bg-opacity-50 shadow-lg rounded-lg text-left border border-gray-500 p-6 my-4 mt-20">
        <div className="bg-[rgb(180,190,15)] bg-opacity-70 w-full text-center p-1 rounded-lg">
          <h2 className="text-xl font-semibold m-2 uppercase">
            Seguros Particulares y Personales
          </h2>
        </div>

        <h3 className="text-[rgb(180,190,15)] pl-4 pt-6 uppercase text-xl font-semibold">
          Soluciones para la proteccion del patrimonio:
        </h3>
        <ul className="list-disc pl-5">
          <li>
            <strong>Seguros de autos:</strong> seguros de coche, seguros de
            motocicletas y ciclomotores, seguros de camiones y tractores
          </li>
          <li>
            <strong>Seguros para la vivienda:</strong> seguro de hogar,
            protección de alquileres
          </li>
          <li>
            <strong>Seguros de edificios de viviendas</strong>
          </li>
          <li>
            <strong>Seguros de embarcaciones de recreo</strong>
          </li>
        </ul>

        <h3 className="text-[rgb(180,190,15)] pl-4 pt-6 uppercase text-xl font-semibold">
          Soluciones para la proteccion personal:
        </h3>
        <ul className="list-disc pl-5">
          <li>
            <strong>Seguros de salud:</strong> asistencia sanitaria, reembolso,
            indemnización, dental
          </li>
          <li>
            <strong>Seguros de vida riesgo y accidentes</strong>
          </li>
          <li>
            <strong>Seguros de decesos</strong>
          </li>
        </ul>

        <h3 className="text-[rgb(180,190,15)] pl-4 pt-6 uppercase text-xl font-semibold">
          Soluciones para viajes y ocio:
        </h3>
        <ul className="list-disc pl-5">
          <li>
            <strong>Seguros de viaje y ocio:</strong> responsabilidad civil del
            cazador y pescador, seguro de bicicletas y patín y asistencia en
            viaje
          </li>
        </ul>

        <h3 className="text-[rgb(180,190,15)] pl-4 pt-6 uppercase text-xl font-semibold">
          Soluciones aseguradoras adicionales
        </h3>
        <ul className="list-disc pl-5">
          <li>
            <strong>Responsabilidad civil general familiar</strong>
          </li>
          <li>
            <strong>Seguro de animales de compañía</strong>
          </li>
          <li>
            <strong>Seguro para caballos</strong>
          </li>
        </ul>
        <div className="mt-10"><ContactButton /></div>
        
      </div>

      {/* Seguros de Empresas */}

      <div id="seguros-empresariales" className="bg-lime-50 bg-opacity-50 shadow-lg rounded-lg border border-gray-500 p-6 my-4 mt-20">
        <div className="bg-[rgb(180,190,15)] bg-opacity-70 w-full text-center p-1 rounded-lg">
          <h2 className="text-xl font-semibold m-2 uppercase">
            Seguros Para Empresas
          </h2>
        </div>

        <h3 className="text-[rgb(180,190,15)] pl-4 pt-6 uppercase text-xl font-semibold">
          Soluciones para la proteccion del patrimonio:
        </h3>
        <ul className="list-disc pl-5">
          <li>
            <strong>Seguro para industrias y servicios:</strong> seguro
            multirriesgo empresarial
          </li>
          <li>
            <strong>Seguro para comercios:</strong> seguro de comercios,
            oficinas y farmacias
          </li>
          <li>
            <strong>Empresas agropecuarias:</strong> seguro multirriesgo
            agropecuario, póliza para invernaderos, seguro para tractores y
            maquinaria agrícola, seguro agrario combinado
          </li>
          <li>
            <strong>Seguro para vehiculos:</strong> flota autos PYME
          </li>
          <li>
            <strong>Maquinaria y equipos electronicos:</strong> seguro de avería
            de maquinaria, seguro de equipos electrónicos
          </li>
          <li>
            <strong>Seguros para la construccion:</strong> seguro todo riesgo
            construcción, seguro para daños a la edificación
          </li>
          <li>
            <strong>Transporte, cascos y aviacion:</strong> seguro de transporte
            terrestre, seguro de drones
          </li>
        </ul>

        <h3 className="text-[rgb(180,190,15)] pl-4 pt-6 uppercase text-xl font-semibold">
          Soluciones para la proteccion de la responsabilidad frente a terceros:
        </h3>
        <ul className="list-disc pl-5">
          <li>Responsabilidad civil para empresas</li>
          <li>Responsabilidad civil directivos y administradores sociales</li>
          <li>Responsabilidad civil profesional</li>
          <li>Responsabilidad civil para explotaciones agropecuarias</li>
          <li>Seguro cyberriesgos pymes y autónomos</li>
          <li>Seguro de protección de datos para empresas y autónomos</li>
        </ul>

        <h3 className="text-[rgb(180,190,15)] pl-4 pt-6 uppercase text-xl font-semibold">
          Soluciones para la proteccion de cuentas de resultados:
        </h3>
        <ul className="list-disc pl-5">
          <li>Seguros de credito</li>
          <li>
            Seguros de contingencias: seguro de cancelación de eventos, seguro
            de cancelación de congresos y convenciones, seguro de perdida de
            rendimiento de instalaciones familiares
          </li>
        </ul>

        <h3 className="text-[rgb(180,190,15)] pl-4 pt-6 uppercase text-xl font-semibold">
          Soluciones para la proteccion del personal de la empresa:
        </h3>
        <ul className="list-disc pl-5">
          <li>Seguros de salud</li>
        </ul>
        <div className="mt-10"><ContactButton /></div>
      </div>

      {/* Agroseguros */}

      <div id="agroseguros" className="bg-lime-50 shadow-lg rounded-lg border border-gray-500 p-6 my-4 mt-20">
        <div className="bg-[rgb(180,190,15)] bg-opacity-70 w-full text-center p-1 rounded-lg">
          <h2 className="text-xl font-semibold m-2 uppercase">
            Seguros para el Campo | Agroseguros
          </h2>
        </div>

        <div className="p-4 my-4 flex flex-col lg:flex-row">
          <div className="lg:w-1/3 mb-4 lg:mb-0 lg:mr-4">
            <StaticImage
              src="../images/agroseguros-valencia-castellon-almenara.png"
              alt="Seguros Patrimoniales"
              className="w-72 lg:w-72 rounded-lg shadow-md"
            />
          </div>
          <div className="lg:w-2/3">
            <p>
              Agroseguro: Contratación de los diferentes módulos existentes en
              las líneas de aseguramiento agrícola. Trabajo de peritaje,
              evaluación de condiciones de terreno, etc. Coberturas para
              cítricos, caqui, aguacate, etc. Servicio post-venta personalizado,
              acompañando al perito en las tasaciones de daños. Seguros de
              explotaciones ganaderas.
            </p>
          </div>
          <div className="mt-10"><ContactButton /></div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
