import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>React AJAX</h1>
      <Weather city="Sydney" />
      <Weather city="Paris" />
      <Weather city="New York" />
    </div>
  </StrictMode>
);
