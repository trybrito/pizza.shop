import "./global.css";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";

import { Router } from "./router";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </HelmetProvider>
  );
}
