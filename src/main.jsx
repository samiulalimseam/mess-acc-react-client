import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router";
import { router } from "./Routers/Routes.jsx";
import { Provider as ReactReduxProvider } from "react-redux";
import store from "./redux/store.js";
import UserProvider from "./context/UserProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ReactReduxProvider store={store}>
        <UserProvider>
          <RouterProvider router={router}>
           
              <App />
         
          </RouterProvider>
        </UserProvider>
      </ReactReduxProvider>
    </ChakraProvider>
  </React.StrictMode>
);
