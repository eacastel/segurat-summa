// src/pages/cookies.js
import React from "react"
import Layout from "../components/Layout"

export default function CookiesPage() {
  return (
    <Layout>
      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase mb-6">
          Cookies
        </h1>

        <div className="prose prose-gray max-w-none">
          <h2>¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos que se descargan en tu dispositivo al visitar un sitio web.
            Sirven para recordar información sobre tu visita y facilitar el uso del sitio.
          </p>

          <h2>Tipos de cookies que podemos usar</h2>
          <ul>
            <li><strong>Técnicas (necesarias):</strong> permiten el funcionamiento del sitio y no requieren consentimiento.</li>
            <li><strong>Analíticas:</strong> ayudan a entender cómo se usa el sitio (por ejemplo, páginas visitadas, tiempo de navegación).</li>
            <li><strong>Preferencias:</strong> recuerdan ajustes del usuario (si existieran).</li>
          </ul>

          <h2>Cookies de terceros</h2>
          <p>
            Este sitio puede utilizar cookies de terceros (por ejemplo, herramientas de analítica como Google
            Analytics / Google Tag). Esos terceros pueden recopilar información técnica y de uso según sus políticas.
          </p>

          <h2>Gestión del consentimiento</h2>
          <p>
            Cuando sea necesario, se mostrará un banner o panel de configuración para aceptar, rechazar o configurar
            cookies no necesarias.
          </p>

          <h2>Cómo desactivar cookies desde el navegador</h2>
          <p>
            Puedes permitir, bloquear o eliminar cookies desde la configuración de tu navegador. Ten en cuenta que
            bloquear cookies técnicas puede afectar al funcionamiento del sitio.
          </p>
          <ul>
            <li>Chrome: Configuración &gt; Privacidad y seguridad &gt; Cookies</li>
            <li>Firefox: Ajustes &gt; Privacidad y seguridad</li>
            <li>Safari: Preferencias &gt; Privacidad</li>
            <li>Edge: Configuración &gt; Cookies y permisos del sitio</li>
          </ul>

          <h2>Actualizaciones</h2>
          <p>Podremos modificar esta política para adaptarla a cambios normativos o técnicos.</p>
        </div>
      </main>
    </Layout>
  )
}
