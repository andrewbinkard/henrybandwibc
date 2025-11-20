import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.scss";
import { BrowserRouter } from "react-router-dom";
import { routes } from "./Routes/routes.tsx";
import { inject } from "@vercel/analytics";

inject();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App routes={routes} />
    </BrowserRouter>
  </StrictMode>
);
