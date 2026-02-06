import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
