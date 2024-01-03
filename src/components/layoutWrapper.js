// src/components/layoutWrapper.js
import React from "react";
import PropTypes from "prop-types";

const LayoutWrapper = ({ children }) => {
  return (
    <>
    
    <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
      {children}
    </div>
    </>
  );
};

LayoutWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWrapper;
