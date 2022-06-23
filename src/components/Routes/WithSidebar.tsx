import React from "react";
import { Sidebar } from "../index";
import { Outlet } from "react-router";

export function WithSidebar(){
  return (  
    <div className="sidebar-container">
        <Sidebar/>
        <Outlet/>
    </div>
  );
};