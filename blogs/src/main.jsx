import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { BlogProvider } from "./context/BlogContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <BlogProvider>
      <App />
    </BlogProvider>
  </BrowserRouter>
);