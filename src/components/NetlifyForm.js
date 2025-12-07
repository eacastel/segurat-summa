import React, { useState } from "react"

const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&")

export default function NetlifyForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const form = e.target
    const formData = new FormData(form)

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(Object.fromEntries(formData)),
      })

      if (!res.ok) throw new Error("Bad response")

      setSent(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
      form.reset()
    } catch (err) {
      setError("No se pudo enviar. Inténtalo de nuevo o escríbenos por WhatsApp.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-white py-12 px-6 md:px-12 rounded-2xl shadow-xl border border-gray-100 my-12 max-w-5xl mx-auto relative overflow-hidden">
      {/* Decorative Top Line matching the Hero Card */}
      <div className="absolute top-0 left-0 w-full h-2 bg-brand-orange"></div>

      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase mb-4">
          ¿Necesitas presupuesto?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Déjanos tus datos y te contactamos en menos de 24h para ofrecerte la mejor opción.
        </p>
      </div>

      <form
        name="contacto-segurat"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <input type="hidden" name="form-name" value="contacto-segurat" />

        {/* honeypot */}
        <p className="hidden">
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        {/* Name Input */}
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="mb-2 font-bold text-sm text-brand-black uppercase tracking-wide"
          >
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ej: Juan Pérez"
            className="p-4 rounded-lg bg-gray-50 border border-gray-300 text-brand-black focus:border-brand-orange focus:ring-brand-orange focus:bg-white transition duration-200"
            required
          />
        </div>

        {/* Phone Input */}
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="mb-2 font-bold text-sm text-brand-black uppercase tracking-wide"
          >
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Ej: 600 000 000"
            className="p-4 rounded-lg bg-gray-50 border border-gray-300 text-brand-black focus:border-brand-orange focus:ring-brand-orange focus:bg-white transition duration-200"
            required
          />
        </div>

        {/* Select Input */}
        <div className="flex flex-col md:col-span-2">
          <label
            htmlFor="interest"
            className="mb-2 font-bold text-sm text-brand-black uppercase tracking-wide"
          >
            Estoy interesado en...
          </label>
          <div className="relative">
            <select
              id="interest"
              name="interest"
              className="w-full p-4 rounded-lg bg-gray-50 border border-gray-300 text-brand-black focus:border-brand-orange focus:ring-brand-orange focus:bg-white transition duration-200 appearance-none"
            >
              <option value="general">Información General</option>
              <option value="autos">Seguro de Auto/Vehículos</option>
              <option value="hogar">Seguro de Hogar</option>
              <option value="salud">Seguro de Salud</option>
              <option value="empresas">Seguros para Empresas</option>
              <option value="agrario">Agroseguros / Campo</option>
            </select>

            {/* Custom Arrow Icon */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="flex flex-col md:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 font-bold text-sm text-brand-black uppercase tracking-wide"
          >
            Mensaje (Opcional)
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Cuéntanos un poco más sobre lo que necesitas..."
            className="p-4 rounded-lg bg-gray-50 border border-gray-300 text-brand-black focus:border-brand-orange focus:ring-brand-orange focus:bg-white transition duration-200"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center mt-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto bg-brand-orange text-white font-extrabold py-4 px-12 rounded-lg hover:bg-brand-black hover:text-white transition transform hover:-translate-y-1 shadow-lg text-lg uppercase tracking-wider disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {loading ? "Enviando..." : "Enviar Solicitud"}
          </button>

          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

          <p className="mt-4 text-xs text-gray-400">
            Al enviar este formulario aceptas nuestra política de privacidad.
          </p>
        </div>
      </form>

      {/* SUCCESS MODAL */}
      {sent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSent(false)}
          />
          <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl border border-gray-100 p-8">
            <div className="h-2 w-full bg-brand-orange rounded-full mb-6" />
            <h3 className="text-2xl font-extrabold text-brand-black uppercase">
              ¡Listo!
            </h3>
            <p className="mt-3 text-gray-700">
              Hemos recibido tu solicitud. Te contactaremos en menos de 24h.
            </p>
            <button
              className="mt-8 w-full bg-brand-black text-white font-extrabold py-3 rounded-lg hover:bg-gray-900 transition"
              onClick={() => setSent(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
