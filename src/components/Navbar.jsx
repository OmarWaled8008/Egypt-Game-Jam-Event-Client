import React from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-background-dark">
                <span className="material-symbols-outlined font-bold">
                  sports_esports
                </span>
              </div>
              <h1 className="text-xl font-bold tracking-tight">
                Egypt Game Jam <span className="text-primary">2026</span>
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-sm font-medium text-primary border-b-2 border-primary pb-1"
                    : "text-sm font-medium hover:text-primary transition-colors"
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-sm font-medium text-primary border-b-2 border-primary pb-1"
                    : "text-sm font-medium hover:text-primary transition-colors"
                }
                to="/qrscanner"
              >
                Qr Scanner
              </NavLink>
              {/* <a
                className="text-sm font-medium hover:text-primary transition-colors"
                href="#"
              >
                Attendees
              </a> */}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
