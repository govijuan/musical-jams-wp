import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const mount = document.getElementById("mj-root");
if (mount) {
  const root = createRoot(mount);
  root.render(<App />);
}
