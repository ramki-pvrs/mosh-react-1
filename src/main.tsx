import React from "react";
import ReactDOM from "react-dom/client";
//App.tsx is the root component
import App from "./App.tsx";
//home/ubuntu/Documents/mosh/react/react-app
//after giving command npm install bootstrap@latest
import "bootstrap/dist/css/bootstrap.css";

//React is for only UI part of the deal
//ReactDOM is the module for rendering the DOM (vDOM)
//App is the root component -
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
