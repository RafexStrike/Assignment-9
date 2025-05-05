import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./Router/Route.jsx";
import EventProvider from "./Contexts/Events/EventProvider.jsx";
import AuthProvider from "./Contexts/Auth/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <EventProvider>
        <RouterProvider router={router}></RouterProvider>
      </EventProvider>
    </AuthProvider>
  </StrictMode>
);
