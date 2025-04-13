import { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    const hideTranslateBarStyles = `
      .skiptranslate iframe {
        display: none !important;
      }
      .goog-te-banner-frame {
        display: none !important;
      }
      .goog-te-menu-value:hover {
        text-decoration: none !important;
      }
      body {
        top: 0 !important;
      }
    `;
    const style = document.createElement('style');
    style.textContent = hideTranslateBarStyles;
    document.head.appendChild(style);
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', autoDisplay: false, },
          'google_translate_element'
        );
      };
    };

    // Only add the script if it's not already there
    if (!window.google?.translate) {
      addGoogleTranslateScript();
    }
  }, []);

  return <div id="google_translate_element" />;
};

export default GoogleTranslate;
