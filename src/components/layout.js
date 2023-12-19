// src/components/layout.js
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import LayoutWrapper from "./layoutWrapper";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <LayoutWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
      </LayoutWrapper>
      <LayoutWrapper>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Todos los derechos reservados Jesus Gomis, SL.
          {` `}
        </footer>
      </LayoutWrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
