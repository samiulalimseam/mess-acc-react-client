import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Dashboard from "../pages/Dashboard";
import Sidebar from "../Components/Shared/Sidebar";
import MemberList from "../Components/Member/MemberList";
import Meal from "../Components/Meal/Meal";
import Tasks from "../Components/Tasks/Tasks";
import Grocery from "../pages/Grocery";
import Chat from "../pages/Chat";

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
        element:<Meal></Meal>, 
       
      },
      {
        path: "/grocery",
        element: <Grocery></Grocery>, 
       
      },
      {
        path: "/chat",
        element: <Chat></Chat>, 
       
      },
      {
        path: "/tasks",
        element: <Tasks></Tasks>, 
       
      },
    ],
  },
]);
