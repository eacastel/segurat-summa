// src/components/layoutWrapper.js
import React from "react";
import PropTypes from "prop-types";

const LayoutWrapper = ({ children }) => {
  return (
    <div style={{ margin: '0 auto', maxWidth: 1240, padding: '0 1.0875rem' }}>
      {children}
    </div>
  );
};

LayoutWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWrapper;
