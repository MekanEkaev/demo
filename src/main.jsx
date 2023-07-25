import React from "react";
import ReactDOM from "react-dom/client";
import "./../src/assets/styles/global.css";
import Router from "./assets/components/ui/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>,
);
