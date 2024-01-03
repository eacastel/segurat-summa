import React, { useState, useEffect } from 'react';

const ConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gdprConsent');
    if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = (consent) => {
    localStorage.setItem('gdprConsent', consent);
    setShowBanner(false);

    if (consent === 'true') {
      // Push an event to the data layer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 'event': 'allow-google-analytics' });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-600 bg-opacity-90 py-2 px-6 shadow-md text-center z-50 w-full">
      <p className="text-m mb-4 text-white font-bold">Este sitio web utiliza cookies.<br />
      En nuestra web anonimizamos tus datos y solo utilizamos cookies para analizar cómo proporcionar un mejor servicio.</p>
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
