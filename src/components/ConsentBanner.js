import React, { useState, useEffect } from 'react';
import { useLocation } from "@reach/router"; 
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';

const ConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const consent = localStorage.getItem('gatsby-gdpr-google-analytics');
    if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = (consentValue) => {
    localStorage.setItem('gatsby-gdpr-google-analytics', consentValue);
    setShowBanner(false);

    if (consentValue === 'true') {
      initializeAndTrack(location);
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-600 bg-opacity-90 py-2 px-6 shadow-md text-center z-50 w-full">
      <p className="text-m mb-4 text-white font-bold">Este sitio web utiliza cookies.<br />
      En nuestra web anonimizamos tus datos personales y solo utilizamos cookies anónimas para proporcionar un mejor servicio.</p>
      <button 
        onClick={() => handleConsent('true')} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Aceptar
      </button>
      <button 
        onClick={() => handleConsent('false')}
        className="ml-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
        Rechazar
      </button>
    </div>
  );
};

export default ConsentBanner;
