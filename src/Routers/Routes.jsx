import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayOut";
import Dashboard from "../pages/Dashboard";
import Sidebar from "../Components/Shared/Sidebar";
import MemberList from "../Components/Member/MemberList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>, 
       
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>, 
       
      },
      {
        path: "/members",
        element: <MemberList></MemberList>, 
       
      },
      {
        path: "/meal",
        element: <div>This is Meal</div>, 
       
      },
      {
        path: "/grocery",
        element: <div>This is Grocery</div>, 
       
      },
      {
        path: "/tasks",
        element: <div>This is Tasks</div>, 
       
      },
    ],
  },
]);
