import React, { useState, useEffect } from 'react';

const ConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gdprConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const giveConsent = () => {
    localStorage.setItem('gdprConsent', 'true');
    setShowBanner(false);
    
    // Push an event to the data layer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'allow-google-analytics',
    });
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-600 bg-opacity-90 py-2 px-6 shadow-md text-center z-50 w-50%">
      <p className="text-m mb-4 text-white font-bold">Este sitio web utiliza cookies.<br />
      En nuestra web anonimizamos tus datos y solo utilizamos cookies para analizar cómo proporcionar un mejor servicio.</p>
      <button 
        onClick={giveConsent} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Aceptar
      </button>
    </div>
  );
};

export default ConsentBanner;
