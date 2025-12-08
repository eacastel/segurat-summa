// src/pages/politica-de-privacidad.js
import React from "react"
import Layout from "../components/Layout"

export default function PoliticaDePrivacidadPage() {
  return (
    <Layout>
      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase mb-6">
          Política de privacidad
        </h1>

        <div className="prose prose-gray max-w-none">
          <h2>Responsable del tratamiento</h2>
          <ul>
            <li><strong>Responsable:</strong> Jesús Gomis SL</li>
            <li><strong>Dirección:</strong> Plaza Ausiás March, 5 bajo, 12590 Almenara, Castellón, España</li>
            <li><strong>Marca comercial:</strong> SEGURAT</li>
          </ul>

          <h2>Datos que recopilamos</h2>
          <p>Podemos recopilar los siguientes datos a través de formularios o comunicaciones:</p>
          <ul>
            <li>Nombre y apellidos</li>
            <li>Teléfono</li>
            <li>Correo electrónico (si se solicita o facilita)</li>
            <li>Información relacionada con el tipo de seguro de interés y mensajes enviados por el usuario</li>
            <li>Datos técnicos básicos (por ejemplo, dirección IP, navegador) cuando sea necesario por seguridad y funcionamiento</li>
          </ul>

          <h2>Finalidades</h2>
          <p>Tratamos los datos para:</p>
          <ul>
            <li>Gestionar solicitudes de información y presupuestos</li>
            <li>Contactar con el usuario por los canales facilitados (teléfono, email, WhatsApp)</li>
            <li>Gestionar comunicaciones relacionadas con la atención al cliente</li>
            <li>Mejorar el sitio web y su seguridad</li>
          </ul>

          <h2>Base legal</h2>
          <ul>
            <li><strong>Consentimiento</strong> del usuario (al enviar formularios o solicitar contacto)</li>
            <li><strong>Aplicación de medidas precontractuales</strong> a petición del interesado (elaboración de presupuestos/asesoramiento)</li>
            <li><strong>Interés legítimo</strong> (seguridad del sitio, prevención de abuso)</li>
          </ul>

          <h2>Conservación</h2>
          <p>
            Conservaremos los datos durante el tiempo necesario para atender la solicitud y, posteriormente,
            durante los plazos exigidos por obligaciones legales o para la defensa ante posibles reclamaciones.
          </p>

          <h2>Destinatarios / Encargados</h2>
          <p>
            Podemos utilizar proveedores de servicios (por ejemplo, hosting, analítica, correo o mensajería)
            que actúan como encargados del tratamiento. No vendemos datos a terceros.
          </p>

          <h2>Transferencias internacionales</h2>
          <p>
            Algunos proveedores tecnológicos pueden estar ubicados fuera del Espacio Económico Europeo. En ese
            caso, se aplicarán garantías adecuadas (por ejemplo, cláusulas contractuales tipo u otras medidas).
          </p>

          <h2>Derechos del usuario</h2>
          <p>
            El usuario puede ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y
            portabilidad. También puede retirar el consentimiento en cualquier momento. Asimismo, puede presentar
            una reclamación ante la Agencia Española de Protección de Datos (AEPD).
          </p>

          <h2>Cómo ejercer tus derechos</h2>
          <p>
            Para ejercer tus derechos, envía una solicitud indicando tu petición y datos identificativos a través
            de los medios de contacto del sitio o por escrito al domicilio social: Plaza Ausiás March, 5 bajo,
            12590 Almenara, Castellón, España.
          </p>

          <h2>Cambios en la política</h2>
          <p>Podemos actualizar esta política para reflejar cambios legales o técnicos.</p>
        </div>
      </main>
    </Layout>
  )
}
