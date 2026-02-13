import React, { useState } from "react";
import { Fab, Webchat } from "@botpress/webchat";
import "./AIAssistant.css";

const CLIENT_ID = "213be4cb-5531-47ad-9e1e-4a5682de13e1";
const CHAT_RADIUS_PX = 24;
const WEBCHAT_CONFIGURATION = {
  botName: "VG-Cares Assistant",
  botDescription: "",
  color: "#007bff",
  variant: "solid",
  headerVariant: "solid",
  themeMode: "light",
  fontFamily: "Poppins",
  radius: 4,
  feedbackEnabled: false,
};

const AIAssistant = () => {
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((previousState) => !previousState);
  };

  return (
    <>
      <Webchat
        clientId={CLIENT_ID}
        configuration={WEBCHAT_CONFIGURATION}
        className="vg-cares-webchat"
        style={{
          width: "400px",
          maxWidth: "calc(100vw - 24px)",
          height: "600px",
          maxHeight: "calc(100vh - 110px)",
          display: isWebchatOpen ? "flex" : "none",
          position: "fixed",
          bottom: "90px",
          right: "12px",
          borderRadius: `${CHAT_RADIUS_PX}px`,
          boxShadow: "0 18px 40px rgba(0, 40, 90, 0.22)",
          overflow: "hidden",
          zIndex: 9999,
        }}
      />

      <Fab
        aria-label="Open VG-Cares Assistant"
        onClick={toggleWebchat}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "64px",
          height: "64px",
          borderRadius: "999px",
          background: "linear-gradient(135deg, #007bff 0%, #0059c9 100%)",
          boxShadow: "0 12px 30px rgba(0, 108, 224, 0.35)",
          zIndex: 9999,
        }}
      />
    </>
  );
};

export default AIAssistant;