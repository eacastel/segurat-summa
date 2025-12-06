// src/pages/index.js (or wherever your IndexPage lives)
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import HeroSlider from "../components/HeroSlider"
import { WhatsAppButton, PhoneButton } from "../components/CtaButtons"
import NetlifyForm from "../components/NetlifyForm"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

/** -----------------------------
 *  Long coverage lists (collapsed)
 *  ----------------------------- */
const PARTICULARES = {
  Patrimonio: [
    "Autos (coche, moto, ciclomotor), camiones y tractores",
    "Vivienda: hogar y protección de alquileres",
    "Edificios y comunidades de vecinos",
    "Embarcaciones de recreo",
  ],
  Personal: [
    "Salud: asistencia sanitaria, reembolso, indemnización, dental",
    "Vida riesgo y accidentes",
    "Decesos",
  ],
  "Viajes y ocio": [
    "Viajes y asistencia en viaje",
    "Responsabilidad civil del cazador y pescador",
    "Bicicletas y patín",
  ],
  "Otros (según caso)": [
    "Responsabilidad civil general familiar",
    "Animales de compañía",
    "Caballos",
  ],
}

const EMPRESAS = {
  "Patrimonio y actividad": [
    "Industria y servicios: multirriesgo empresarial",
    "Comercios: comercios, oficinas y farmacias",
    "Empresas agropecuarias: multirriesgo agropecuario, invernaderos, tractores y maquinaria agrícola, agrario combinado",
    "Vehículos: flota autos PYME",
    "Maquinaria: avería de maquinaria",
    "Equipos electrónicos: avería / daños",
    "Construcción: todo riesgo construcción, daños a la edificación",
    "Transporte, cascos y aviación: transporte terrestre, drones",
  ],
  Responsabilidad: [
    "Responsabilidad civil para empresas",
    "Responsabilidad civil directivos y administradores (D&O)",
    "Responsabilidad civil profesional",
    "Responsabilidad civil explotaciones agropecuarias",
    "Ciberriesgos (pymes y autónomos)",
    "Protección de datos (empresas y autónomos)",
  ],
  "Resultados y contingencias": [
    "Seguro de crédito",
    "Cancelación de eventos / congresos y convenciones",
    "Pérdida de rendimiento (instalaciones familiares)",
  ],
  Personal: ["Seguros de salud"],
}

const AGRO = [
  "Contratación de módulos Agroseguro (líneas de aseguramiento agrícola)",
  "Peritaje y evaluación de condiciones del terreno",
  "Coberturas para cítricos, caqui, aguacate y otras producciones",
  "Servicio post-venta y acompañamiento en tasaciones de daños",
  "Seguros de explotaciones ganaderas",
]

const quickLinks = [
  {
    label: "SEGUROS PERSONALES",
    href: "#seguros-patrimoniales",
    accent: "border-brand-orange",
    chip: "bg-brand-orange/10 text-brand-orange",
  },
  {
    label: "SEGUROS EMPRESARIALES",
    href: "#seguros-empresariales",
    accent: "border-brand-black",
    chip: "bg-brand-black/10 text-brand-black",
  },
  {
    label: "AGROSEGUROS",
    href: "#agroseguros",
    accent: "border-brand-green",
    chip: "bg-brand-green/10 text-brand-green",
  },
]


/** -----------------------------
 *  Small UI helpers (drop-in)
 *  ----------------------------- */
function CoverageDetails({ title = "Ver coberturas incluidas", groups }) {
  return (
    <details className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <summary className="cursor-pointer select-none text-sm md:text-base font-extrabold text-brand-black">
        {title}
      </summary>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {Object.entries(groups).map(([groupTitle, items]) => (
          <div key={groupTitle}>
            <p className="text-sm font-extrabold text-brand-orange mb-3">
              {groupTitle}
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              {items.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-brand-orange" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </details>
  )
}

function HowWeWork() {
  const steps = [
    { n: "01", title: "Cuéntanos tu caso", desc: "Objetivo, plazos, presupuesto y necesidades reales." },
    { n: "02", title: "Comparamos coberturas", desc: "Entre compañías líderes, con criterios claros." },
    { n: "03", title: "Opciones sin letra pequeña", desc: "Te explicamos diferencias y recomendaciones." },
    { n: "04", title: "Te acompañamos en siniestros", desc: "Gestión y seguimiento cuando lo necesitas." },
  ]

  return (
    <div>
      <div className="flex items-center mb-8">
        <div className="h-1 w-12 bg-brand-orange mr-4" />
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-black uppercase">
          Cómo trabajamos
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div
            key={s.title}
            className="
              rounded-2xl bg-white p-6 border border-gray-100
              shadow-sm hover:shadow-md hover:-translate-y-[2px] transition
            "
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-lg font-extrabold text-brand-black leading-snug">
                {s.title}
              </p>
              <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-brand-orange text-white shadow-sm">
                {s.n}
              </span>
            </div>

            <p className="mt-4 text-[15px] md:text-[16px] text-gray-700 leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexImages {
      almenara: file(relativePath: { eq: "castillo-almenara-castellon-seguros.png" }) {
        childImageSharp {
          gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      checkmark: file(relativePath: { eq: "check-box-segurat.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 64
            placeholder: TRACED_SVG
            formats: [AUTO, WEBP, AVIF]
            layout: FIXED
          )
        }
      }
      agro: file(relativePath: { eq: "mandarinas-almenara-castellon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `)

  const almenaraImg = getImage(data.almenara)
  const checkmarkImg = getImage(data.checkmark)
  const agroImg = getImage(data.agro)

  return (
    <Layout>
      <div className="scroll-smooth">
      <SEO title="Segurat - Summa Insurance | Seguros en Almenara" image="/segurat-summa-insurance-512-w.png" />

      {/* HERO */}
      <div className="relative bg-off-white">
        <div className="w-full h-[850px] md:h-[750px] relative overflow-hidden">
  <div className="absolute inset-0">
    <HeroSlider />
  </div>

  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/30 pointer-events-none"></div>
</div>

        {/* OVERLAPPING CARD */}
        <div className="container mx-auto max-w-7xl px-4 relative z-20 flex flex-col md:items-end">
          <div
            className="
              bg-white/95 backdrop-blur-sm 
              rounded-xl shadow-2xl 
              p-6 md:p-10 
              border-t-8 border-brand-orange 
              w-[95%] md:w-[50%] lg:w-[45%] 
              -mt-[680px] md:-mt-[588px] 
              mx-auto md:mx-0
              mb-20
            "
          >
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-brand-black uppercase leading-tight">
                  Seguros particulares, empresariales y agrarios
                </h1>
                <div className="mt-3 flex items-center">
                  <div className="h-1 w-10 bg-brand-orange mr-3" />
                  <span className="text-brand-orange text-lg md:text-xl font-bold">
                    En Almenara, Castellón y Valencia
                  </span>
                </div>
              </div>

              <p className="text-gray-700 text-base leading-relaxed font-medium">
                Te ayudamos a elegir la mejor póliza con comparativas entre compañías líderes y una
                recomendación clara según tu caso.
              </p>

              <div className="flex flex-col gap-3 mt-4">
                <WhatsAppButton
                  text="Pedir Precio por WhatsApp"
                  className="w-full justify-center text-lg shadow-lg"
                />
                <PhoneButton
                  text="Llamar Ahora"
                  className="w-full justify-center bg-brand-black hover:bg-gray-800 text-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INTRO + TRUST */}
      <div className="bg-off-white py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div className="prose lg:prose-lg text-gray-700 max-w-none">
              <h3 className="text-2xl font-bold text-brand-black mb-4">
                Ofrecemos comparativas de seguros y asesoramiento personalizado
              </h3>

              <p className="mb-4">
                Somos corredores de seguros con amplia experiencia. Comparamos coberturas y precios
                entre compañías líderes y te asesoramos para contratar lo que necesitas.
              </p>

              <p className="mb-4">
                También tramitamos siniestros y hacemos seguimiento del seguro contratado. Menos
                fricción, más tranquilidad.
              </p>

              <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-brand-green mt-6">
                <h4 className="font-extrabold text-brand-black mb-3 text-lg">Nuestros servicios incluyen:</h4>
                <ul className="space-y-2">
                  {[
                    "Comparativa de seguros (varias compañías)",
                    "Asesoramiento personalizado de coberturas",
                    "Mejor equilibrio calidad/precio",
                    "Tramitación y seguimiento de siniestros",
                    "Gestión del seguro contratado",
                    "Confianza, servicio y calidad",
                  ].map((item) => (
                    <li key={item} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 text-brand-orange mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right */}
            <div className="grid gap-4">
  {quickLinks.map((item) => (
    <a
      key={item.label}
      href={item.href}
      className={`
        group block rounded-2xl border bg-white p-5 shadow-sm
        hover:shadow-lg hover:-translate-y-[2px] transition
        border-gray-100 border-l-8 ${item.accent}
        focus:outline-none focus:ring-2 focus:ring-brand-orange/40
      `}
    >
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className={`p-3 rounded-full ${item.chip} ring-1 ring-black/5`}>
            {checkmarkImg && (
              <GatsbyImage image={checkmarkImg} alt="" className="w-9 h-9" />
            )}
          </div>
          <span className="absolute -bottom-2 -right-2 text-[11px] font-bold px-2 py-1 rounded-full bg-white shadow ring-1 ring-black/5">
            Ver
          </span>
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-lg md:text-xl font-extrabold text-brand-black group-hover:text-brand-orange transition">
              {item.label}
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-600">
            Haz clic para ver coberturas y pedir presupuesto.
          </p>
        </div>
      </div>
    </a>
  ))}
</div>
       
          </div>

          {/* How we work block */}
          {/* How we work block (highlight section) */}
<div className="mt-16">
  <div className="rounded-3xl bg-gradient-to-b from-brand-orange/10 to-transparent p-[1px]">
    <div className="rounded-3xl bg-white px-6 py-10 md:px-10 md:py-12 shadow-lg border border-brand-orange/10">
      <HowWeWork />
    </div>
  </div>
</div>

        </div>
      </div>

      {/* SECTIONS */}
      <div className="bg-white py-12">
        <div className="container mx-auto max-w-7xl px-4 space-y-20">
          {/* 1. SEGUROS PARTICULARES */}
          <div id="seguros-patrimoniales" className="scroll-mt-32">
            <div className="flex items-center mb-8">
              <div className="h-1 w-12 bg-brand-orange mr-4" />
              <h2 className="text-3xl font-extrabold text-brand-black uppercase">Seguros Particulares</h2>
            </div>

            <div className="bg-off-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-brand-orange font-extrabold mb-4 text-lg">Patrimonio</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Autos, motos, tractores</li>
                    <li>Hogar y alquileres</li>
                    <li>Comunidades</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-brand-orange font-extrabold mb-4 text-lg">Personal</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Salud y dental</li>
                    <li>Vida y accidentes</li>
                    <li>Decesos</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-brand-orange font-extrabold mb-4 text-lg">Ocio</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Viajes</li>
                    <li>Caza y pesca</li>
                    <li>Bicicletas</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-brand-orange font-extrabold mb-4 text-lg">¿Interesado?</h3>
                  <WhatsAppButton text="Pedir Precio" className="w-full text-sm" />
                </div>
              </div>

              {/* Collapsed long list */}
              <CoverageDetails groups={PARTICULARES} />
            </div>
          </div>

          {/* 2. SEGUROS EMPRESAS */}
          <div id="seguros-empresariales" className="scroll-mt-32">
            <div className="flex items-center mb-8">
              <div className="h-1 w-12 bg-brand-black mr-4" />
              <h2 className="text-3xl font-extrabold text-brand-black uppercase">Seguros Empresas</h2>
            </div>

            <div className="bg-brand-black text-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand-orange rounded-full opacity-20" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                <div className="space-y-6">
                  <h3 className="text-2xl font-extrabold text-white">Protección Integral para tu Negocio</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="text-brand-orange mr-2">✔</span> Multirriesgo (industria y comercio)
                    </li>
                    <li className="flex items-center">
                      <span className="text-brand-orange mr-2">✔</span> Responsabilidad civil y directivos
                    </li>
                    <li className="flex items-center">
                      <span className="text-brand-orange mr-2">✔</span> Flotas, transportes y construcción
                    </li>
                    <li className="flex items-center">
                      <span className="text-brand-orange mr-2">✔</span> Ciberriesgos y protección de datos
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col justify-center items-start">
                  <p className="mb-6 text-gray-300">
                    Analizamos los riesgos de tu empresa para ofrecerte la cobertura exacta que necesitas.
                    Ni más, ni menos.
                  </p>
                  <WhatsAppButton
                    text="Consultar Empresas"
                    className="bg-brand-orange hover:bg-white hover:text-brand-orange"
                  />
                </div>
              </div>
            </div>

            {/* Collapsed long list */}
            <CoverageDetails groups={EMPRESAS} title="Ver seguros para empresas (detalle)" />
          </div>

          {/* 3. AGROSEGUROS */}
          <div id="agroseguros" className="scroll-mt-32">
            <div className="flex items-center mb-8">
              <div className="h-1 w-12 bg-brand-green mr-4" />
              <h2 className="text-3xl font-extrabold text-brand-black uppercase">Agroseguros</h2>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 shadow-sm border border-green-100 flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                {agroImg && (
                  <GatsbyImage
                    image={agroImg}
                    alt="Agroseguros Valencia"
                    className="rounded-2xl shadow-md w-full"
                  />
                )}
              </div>

              <div className="md:w-2/3">
                <h3 className="text-xl font-extrabold text-brand-green mb-3">Especialistas en el Campo</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Contratación de módulos de aseguramiento agrícola, peritaje y evaluación de terrenos.
                  Expertos en coberturas para <strong>cítricos, caqui y aguacate</strong>, y explotaciones
                  ganaderas. Te acompañamos en las tasaciones de daños.
                </p>
                <PhoneButton text="Llamar a un experto agrario" className="bg-brand-green hover:bg-green-800" />
              </div>
            </div>

            {/* Collapsed long list */}
            <CoverageDetails title="Ver detalle de agroseguros" groups={{ Agroseguros: AGRO }} />
          </div>
        </div>
      </div>

      {/* FORM */}
      <div id="contacto" className="container mx-auto max-w-7xl px-4 mb-20 scroll-mt-32">
        <NetlifyForm />
      </div>
      </div>
    </Layout>
  )
}

export default IndexPage
