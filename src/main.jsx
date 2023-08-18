import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router";
import { router } from "./Routers/Routes.jsx";
import UserProvider from "./Context/UserProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <UserProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>
);
