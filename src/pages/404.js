import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>LO SENTIMOS LA PAGINA QUE BUSCAS NO EXISTE</h1>
    <p>Haz clic <a href="https://segurat-summa.es/">aquí</a> para volver a la página principal.</p>
  </Layout>
)

export default NotFoundPage
