import React from "react"
import Layout from "../components/Layout"

export default function SuccessPage() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="rounded-2xl border border-gray-100 bg-white shadow-xl p-10">
          <div className="h-2 w-full bg-brand-orange rounded-full mb-8" />
          <h1 className="text-3xl font-extrabold text-brand-black uppercase">
            ¡Enviado!
          </h1>
          <p className="mt-4 text-gray-700">
            Hemos recibido tu solicitud. Te contactaremos en menos de 24h.
          </p>
          <a
            href="/"
            className="inline-block mt-8 bg-brand-orange text-white font-extrabold py-3 px-6 rounded-lg hover:bg-brand-black transition"
          >
            Volver al inicio
          </a>
        </div>
      </section>
    </Layout>
  )
}
