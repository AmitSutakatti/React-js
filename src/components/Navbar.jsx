import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 bg-gradient-to-r from-blue-900 via-gray-900 to-indigo-900 shadow-lg transition-all duration-500">
      {/* Logo and Name */}
      <div className="flex items-center gap-3">
        {/* Image Logo */}
        <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-500">
          <img
            src="C:\Users\Amit\OneDrive\Desktop\reactjs\paste-project\src\components" // <-- Replace with your image path
            alt="Logo"
            className="w-8 h-8 object-contain"
          />
        </div>
        <span className="text-2xl font-bold text-blue-200 tracking-wide">Amit</span>
      </div>
      {/* Navigation Links */}
      <div className="flex gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-5 py-2 rounded-lg font-semibold text-lg transition-all duration-300
            ${isActive
              ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md scale-105"
              : "text-blue-200 hover:bg-blue-800 hover:text-white hover:scale-105"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/pastes"
          className={({ isActive }) =>
            `px-5 py-2 rounded-lg font-semibold text-lg transition-all duration-300
            ${isActive
              ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md scale-105"
              : "text-blue-200 hover:bg-blue-800 hover:text-white hover:scale-105"}`
          }
        >
          Pastes
        </NavLink>
      </div>
    </nav>
  )
}
export default Navbar