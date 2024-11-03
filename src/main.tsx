import "./index.css";
import App from "./App.tsx";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserProvider } from "./Context/UserContext/UserContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <GoogleOAuthProvider clientId="260603530454-sbpto2lb9kt2rq5o3582r4httnqdf33i.apps.googleusercontent.com">
        <UserProvider>
          <App />
        </UserProvider>
      </GoogleOAuthProvider>
    </HashRouter>
  </StrictMode>
);
