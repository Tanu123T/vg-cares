import React, { useEffect } from "react";
import "./AIAssistant.css";

const AIAssistant = () => {
  useEffect(() => {
    const injectId = 'botpress-inject';
    const configId = 'botpress-config';
    const configSrc = 'https://files.bpcontent.cloud/2026/02/08/17/20260208173021-J6T01B2S.js';
    const injectSrc = 'https://cdn.botpress.cloud/webchat/v3.5/inject.js';

    if (document.getElementById(injectId)) return;

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

    return () => {
      // 1. Remove script tags
      document.getElementById(injectId)?.remove();
      document.getElementById(configId)?.remove();
      
      // 2. Clear global state
      if (window.botpressWebChat) {
        try {
          // Send a hide signal before destroying
          window.botpressWebChat.sendEvent({ type: 'hide' });
        } catch (e) {
          console.warn("Botpress hide failed", e);
        }
        window.botpressWebChat = undefined;
      }

      // 3. Heavy Scrub
      scrub();
      const interval = setInterval(scrub, 100);
      
      // Stop scrubbing after 2 seconds
      setTimeout(() => {
        clearInterval(interval);
      }, 2000);
    };
  }, []);

  return null;
};

export default AIAssistant;