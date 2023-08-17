import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayOut";
import Dashboard from "../pages/Dashboard";
import Sidebar from "../Components/Shared/Sidebar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>, 
       
      },
    ],
  },
]);
