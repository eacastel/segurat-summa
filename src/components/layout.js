// src/components/layout.js
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import ConsentBanner from './ConsentBanner';

import Header from "./header";
import LayoutWrapper from "./layoutWrapper";
import Footer from "./footer";

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
      <ConsentBanner />
      <LayoutWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
      </LayoutWrapper>
      <LayoutWrapper>
        <main>{children}</main>
     <Footer />
      </LayoutWrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
