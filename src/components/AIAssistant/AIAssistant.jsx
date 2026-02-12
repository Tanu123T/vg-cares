import React, { useEffect } from "react";
import "./AIAssistant.css";

const AIAssistant = () => {
  useEffect(() => {
    const injectId = 'botpress-inject';
    const configId = 'botpress-config';
    const configSrc = 'https://files.bpcontent.cloud/2026/02/08/17/20260208173021-J6T01B2S.js';
    const injectSrc = 'https://cdn.botpress.cloud/webchat/v3.5/inject.js';

    // Aggressive cleanup to prevent ghost icons on other pages
    const scrub = () => {
      const selectors = [
        '#bp-web-widget-container',
        '.bpw-widget-container',
        '.bpw-floating-button',
        'iframe[src*="botpress"]',
        '#bp-web-widget'
      ];
      selectors.forEach(s => {
        document.querySelectorAll(s).forEach(el => el.remove());
      });
    };

    // Load Botpress Scripts
    const script = document.createElement('script');
    script.id = injectId;
    script.src = injectSrc;
    script.async = true;
    script.onload = () => {
      const config = document.createElement('script');
      config.id = configId;
      config.src = configSrc;
      config.defer = true;
      document.body.appendChild(config);
    };
    document.body.appendChild(script);

    // Cleanup when component unmounts
    return () => {
      document.getElementById(injectId)?.remove();
      document.getElementById(configId)?.remove();
      
      if (window.botpressWebChat) {
        try {
          window.botpressWebChat.sendEvent({ type: 'hide' });
        } catch (e) {}
        window.botpressWebChat = undefined;
      }

      scrub();
      // Repeat scrub for 2 seconds to catch late injections
      const interval = setInterval(scrub, 100);
      setTimeout(() => clearInterval(interval), 2000);
    };
  }, []);

  return null;
};

export default AIAssistant;