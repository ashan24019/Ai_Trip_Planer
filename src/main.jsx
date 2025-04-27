import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatTrip from "./create-trip";
import Header from "./components/custom/Header";
import { Toaster } from "./components/ui/sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create-trip" element={<CreatTrip />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
