import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; //Web Content
import { CotizadorProvider } from "./context/CotizadorProvider"; //Context
import "./index.css"; //Tailwind
import "./styles/styles.css"; //Pure CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CotizadorProvider>
      <App />
    </CotizadorProvider>
  </React.StrictMode>
);
