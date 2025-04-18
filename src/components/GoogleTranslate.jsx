import { useEffect, useRef } from 'react';

const GoogleTranslate = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

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
      .goog-te-gadget {
        display: none !important;
      }
      .goog-te-combo {
        display: none !important;
      }
      .goog-te-gadget-simple {
        display: none !important;
      }
      .goog-logo-link {
        display: none !important;
      }
      .goog-te-gadget-icon {
        display: none !important;
      }
      .translated-ltr body {
        top: 0 !important;
      }
      .translated-rtl body {
        top: 0 !important;
      }
    `;

    // Remove any existing styles
    const existingStyles = document.querySelectorAll('style[data-google-translate]');
    existingStyles.forEach(style => style.remove());

    const style = document.createElement('style');
    style.setAttribute('data-google-translate', 'true');
    style.textContent = hideTranslateBarStyles;
    document.head.appendChild(style);

    const addGoogleTranslateScript = () => {
      // Remove any existing script
      const existingScript = document.querySelector('script[src*="translate.google.com"]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        if (window.google?.translate?.TranslateElement) {
          // Prevent automatic translation
          window.google.translate.TranslateElement.InlineLayout.SIMPLE = 'simple';
          
          new window.google.translate.TranslateElement(
            { 
              pageLanguage: 'en',
              autoDisplay: false,
              includedLanguages: 'fr,en',
              // includedLanguages: 'ar,zh-CN,fr,de,hi,id,it,ja,ko,pt,ru,es,th,tr,vi,en',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
            },
            'google_translate_element'
          );

          // Force English as initial language and remove any existing translation
          const googleCombo = document.querySelector(".goog-te-combo");
          if (googleCombo) {
            googleCombo.value = 'en';
            const event = new Event('change', { bubbles: true });
            googleCombo.dispatchEvent(event);
            
            // Remove any existing translation classes
            document.body.classList.remove('translated-ltr', 'translated-rtl');
          }

          // Notify that Google Translate is ready
          const event = new CustomEvent('googleTranslateReady');
          document.dispatchEvent(event);
        }
      };
    };

    // Add a small delay to ensure the DOM is ready
    setTimeout(() => {
      if (!window.google?.translate) {
        addGoogleTranslateScript();
      }
    }, 100);
  }, []);

  return <div id="google_translate_element" style={{ display: 'none' }} />;
};

export default GoogleTranslate;
