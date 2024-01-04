import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: No Existe" />
    <h1>LO SENTIMOS LA PAGINA QUE BUSCAS NO EXISTE</h1>
    <p>Haz clic <Link to="/">aquí</Link> para volver a la página principal.</p>
  </Layout>
)

export default NotFoundPage
