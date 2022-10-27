import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GlobalUsersProvider } from "./Context/User";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalUsersProvider>
      <GoogleOAuthProvider
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
      >
        <App />
      </GoogleOAuthProvider>
    </GlobalUsersProvider>
  </React.StrictMode>
);

reportWebVitals();
