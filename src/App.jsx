import React from "react";
import "./App.css";

function App() {
  return (
    <main
      style={{
        background: "#343a40",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100dvh",
        flexDirection: "column",
        gap: 28,
        paddingBottom: 40,
      }}
    >
      <img style={{ width: 400, height: 153 }} src="images/abreu-logo-v3.png" />
      <div
        style={{
          maxHeight: 620,
          display: "flex",
          alignItems: "center",
          overflow: "clip",
          borderRadius: 12,
        }}
      >
        <img
          style={{ maxWidth: 1400, width: "100%" }}
          src="images/car-profile.jpg"
        />
      </div>
      <a href="https://www.911backdate.com" target="_blank">
        <button
          style={{
            border: "2px solid white",
            padding: "12px 40px",
            borderRadius: 6,
            color: "white",
            fontSize: 24,
            letterSpacing: 4,
            cursor: "pointer",
          }}
        >
          911 BACKDATE
        </button>
      </a>
    </main>
  );
}

export default App;
