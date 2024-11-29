import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import OpenChamado from "./pages/abrir-chamado/abrir-chamado.jsx";
import Squad from "./pages/squad/squad.jsx";
import Login from "./pages/login/login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/abrir-chamado" element={<OpenChamado />} />
        <Route path="/squad" element={<Squad />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
