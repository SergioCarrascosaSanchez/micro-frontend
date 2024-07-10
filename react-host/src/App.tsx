import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// @ts-ignore
import Chip from "react_remote/Chip";

const App = () => (
  <div className="container">
    <div>Name: react-host</div>
    <Chip label="Chip" color="primary" size="large" />
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
