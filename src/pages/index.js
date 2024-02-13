import React from "react"

import SEO from "../components/seo"

const IndexPage = () => (
<div>
    <SEO title="Error 502"  />


    <div className="text-center px-20">
        <h1>Error 502 - Bad Gateway</h1>
        <p>The 502 (Bad Gateway) status code indicates that the server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.</p>
</div>
</div>
)

export default IndexPage
