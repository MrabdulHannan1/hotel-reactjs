// components/gdpr.js
import React, { useState, useEffect } from 'react';

const GDPRBanner = () => {
  console.log('GDPRBanner: render');     // ← this should fire on every render

  const [showBanner, setShowBanner] = useState(() => {
    // lazy‑init from localStorage so we know immediately if we should show
    if (typeof window !== 'undefined') {
      return !localStorage.getItem('gdprConsent');
    }
    return false;
  });

  useEffect(() => {
    console.log('GDPRBanner: useEffect'); // ← this should fire once on mount
    // (no need to re‑check localStorage here since we did it in useState)
  }, []);

  const accept = () => {
    localStorage.setItem('gdprConsent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#222',
        color: '#fff',
        padding: '15px',
        textAlign: 'center',
        zIndex: 9999,
      }}
    >
      This site uses cookies to improve your experience.
      <button
        onClick={accept}
        style={{
          marginLeft: '10px',
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Accept
      </button>
    </div>
  );
};

export default GDPRBanner;
