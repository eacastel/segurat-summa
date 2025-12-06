import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"
import LayoutWrapper from "./LayoutWrapper" // Import your new component


const Layout = ({ children }) => {
  return (
    <>
      {/* Header lives OUTSIDE the wrapper because it is fixed/w-full */}
      <Header />

      {/* Main Content uses the Wrapper to stay centered */}
      <LayoutWrapper>
        <main>{children}</main>
        
        {/* Footer lives inside to align with content, or outside if you want full-width background */}
        <Footer /> 
      </LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout