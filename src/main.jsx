import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { LoginProvider } from "./context/LoginContext";
import appRouter from "./Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoginProvider>
    <RouterProvider router={appRouter} />
  </LoginProvider>
);
