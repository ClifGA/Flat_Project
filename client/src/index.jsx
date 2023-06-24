import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import "./global.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain=""
    clientId=""
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Auth0Provider>
);
