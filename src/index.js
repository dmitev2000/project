import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Layout from "./components/layout/Layout";
import { registerLicense } from "@syncfusion/ej2-base";
import { BrowserRouter as Router } from "react-router-dom";

registerLicense(
  "ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkJhW35Zc3RUT2RaWUM="
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Layout>
      <App />
    </Layout>
  </Router>
);
