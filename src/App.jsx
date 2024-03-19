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
      }}
    >
      <img
        style={{ width: 400, height: 153 }}
        src="/images/abreu-logo-v3.png"
      />
      <a href="https://www.911backdate.com" target="_blank" style={{}}>
        <button
          style={{
            border: "2px solid white",
            padding: "12px 32px",
            borderRadius: "5px",
            color: "white",
            fontSize: 18,
            letterSpacing: 3,
          }}
        >
          COLLECTION
        </button>
      </a>
    </main>
  );
}

export default App;
