// src/pages/aviso-legal.js
import React from "react"
import Layout from "../components/Layout"

export default function AvisoLegalPage() {
  return (
    <Layout>
      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase mb-6">
          Aviso legal
        </h1>

        <div className="prose prose-gray max-w-none">
          <h2>Titularidad del sitio web</h2>
          <p>En cumplimiento con la normativa aplicable, se informa que este sitio web es titularidad de:</p>
          <ul>
            <li><strong>Razón social:</strong> Jesús Gomis SL</li>
            <li><strong>Domicilio:</strong> Plaza Ausiás March, 5 bajo, 12590 Almenara, Castellón, España</li>
            <li><strong>Marca comercial:</strong> SEGURAT</li>
            <li><strong>Sitio web:</strong> segurat-summa.es</li>
          </ul>

          <h2>Condiciones de uso</h2>
          <p>
            El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación de
            las presentes condiciones. El usuario se compromete a utilizar el sitio web, sus contenidos y
            servicios de conformidad con la ley, la buena fe, el orden público y las presentes condiciones.
          </p>

          <h2>Propiedad intelectual e industrial</h2>
          <p>
            Los contenidos del sitio web (textos, imágenes, diseños, logotipos, código, etc.) son propiedad
            del titular o de terceros con licencia, y están protegidos por la normativa de propiedad
            intelectual e industrial. Queda prohibida su reproducción, distribución, comunicación pública o
            transformación sin autorización expresa.
          </p>

          <h2>Responsabilidad</h2>
          <p>
            El titular no garantiza la ausencia de errores o interrupciones en el acceso al sitio web, ni
            que el contenido se encuentre permanentemente actualizado. El titular no se responsabiliza de
            daños derivados del uso del sitio, incluyendo los causados por virus, caídas del servicio o
            incidencias técnicas.
          </p>

          <h2>Enlaces a terceros</h2>
          <p>
            Este sitio puede incluir enlaces a páginas de terceros. El titular no se hace responsable del
            contenido, condiciones o políticas de privacidad de dichos sitios.
          </p>

          <h2>Modificaciones</h2>
          <p>
            El titular se reserva el derecho a modificar, actualizar o eliminar contenidos o condiciones
            del sitio web sin previo aviso.
          </p>

          <h2>Legislación aplicable y jurisdicción</h2>
          <p>
            La relación entre el usuario y el titular se regirá por la legislación española. Para cualquier
            controversia, las partes se someten a los juzgados y tribunales que correspondan conforme a derecho.
          </p>
        </div>
      </main>
    </Layout>
  )
}
