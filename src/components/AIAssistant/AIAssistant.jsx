import React, { useEffect } from "react";
import "./AIAssistant.css";

const AIAssistant = () => {
  useEffect(() => {
    const injectId = 'botpress-inject';
    const configId = 'botpress-config';

    const configSrc = 'https://files.bpcontent.cloud/2026/02/08/17/20260208173021-J6T01B2S.js';
    const injectSrc = 'https://cdn.botpress.cloud/webchat/v3.5/inject.js';

    const ensureConfigScript = () => {
      if (document.getElementById(configId)) return;

      const config = document.createElement('script');
      config.id = configId;
      config.src = configSrc;
      config.defer = true;
      config.onerror = (e) => {
        console.error('Botpress config failed to load:', e);
      };
      document.body.appendChild(config);
    };

    const existingInject = document.getElementById(injectId);
    if (existingInject) {
      const currentSrc = existingInject.getAttribute('src');
      if (currentSrc !== injectSrc) {
        document.body.removeChild(existingInject);
      } else {
        ensureConfigScript();
        return;
      }
    }

    const inject = document.createElement('script');
    inject.id = injectId;
    inject.src = injectSrc;
    inject.async = true;
    inject.onerror = (e) => {
      console.error('Botpress inject failed to load:', e);
    };
    inject.onload = () => {
      ensureConfigScript();
    };

    document.body.appendChild(inject);

    return () => {
      const s1 = document.getElementById(injectId);
      if (s1) document.body.removeChild(s1);

      const s2 = document.getElementById(configId);
      if (s2) document.body.removeChild(s2);

      // Botpress often injects persistent DOM nodes (bubble + widget container).
      // Remove them so the icon does not remain visible on other routes.
      const widgetNodes = document.querySelectorAll(
        '#bp-web-widget-container, .bpw-widget-container, .bpw-widget, iframe[src*="botpress"], iframe[title*="Botpress" i]'
      );
      widgetNodes.forEach((n) => n?.parentNode?.removeChild(n));
    };
  }, []);

  return null;
};

export default AIAssistant;
