import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import "./components/i18n.js"; // استدعاء الإعداد

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Taha-Portfolio">
      <App />
    </BrowserRouter>
  </StrictMode>
);
