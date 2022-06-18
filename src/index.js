import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://a2zpdxjkpq6h.usemoralis.com:2053/server" appId="ErNKg71Ne6NlGFq40iwokazcNkdQ3ZwJajT30F9R">
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);