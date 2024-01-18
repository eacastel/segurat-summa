import React, { useState, useEffect } from 'react';
import { useLocation } from "@reach/router";
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';

function isBrowser() {
  return typeof window !== 'undefined';
}

function getValue(key, defaultValue) {
  return isBrowser() && window.localStorage.getItem(key)
    ? JSON.parse(window.localStorage.getItem(key))
    : defaultValue;
}

function setValue(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function useStickyState(defaultValue, key) {
  const [value, setter] = React.useState(() => {
    return getValue(key, defaultValue);
  });

  React.useEffect(() => {
    setValue(key, value);
  }, [key, value]);

  return [value, setter];
}

const ConsentBanner = () => {
  const location = useLocation();
  if (isBrowser()) {
    initializeAndTrack(location);
  }

  const [bannerHidden, setBannerHidden] = useStickyState(
    false,
    'consentCookieHidden',
  );

  const EnableAnalytics = () => {
    document.cookie = 'gatsby-gdpr-google-analytics=true';
    setBannerHidden(true);
  };

  const DisableAnalytics = () => {
    document.cookie = 'gatsby-gdpr-google-analytics=false';
    setBannerHidden(true);
  };

  return (
    <>
    {!bannerHidden && (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-600 bg-opacity-90 py-2 px-6 shadow-md text-center z-50 w-full">
      <p className="text-m mb-4 text-white font-bold">Este sitio web utiliza cookies.<br />
      En nuestra web anonimizamos tus datos personales y solo utilizamos cookies anónimas para proporcionar un mejor servicio.</p>
      <button 
        onClick={EnableAnalytics}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Aceptar
      </button>
      <button 
        onClick={DisableAnalytics}
        className="ml-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
        Rechazar
      </button>
    </div>
    )}
    </>
  );
};

export default ConsentBanner;
