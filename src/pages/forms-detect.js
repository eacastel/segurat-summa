import React from "react"

export default function FormsDetect() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Forms Detect</h1>

      {/* Netlify needs a real HTML form in the built output to register it */}
      <form
        name="contacto-segurat"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
      >
        <input type="hidden" name="form-name" value="contacto-segurat" />
        <p>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <input name="name" />
        <input name="phone" />
        <select name="interest">
          <option value="general">Información General</option>
        </select>
        <textarea name="message" />
      </form>
    </main>
  )
}
