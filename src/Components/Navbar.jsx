import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logoImg from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <div className="w-11/12 mx-auto navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="font-semibold text-xl">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#632EE3] underline"
                      : "hover:text-[#632EE3] hover:underline"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="font-semibold text-xl">
                <NavLink
                  to="/apps"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#632EE3] underline"
                      : "hover:text-[#632EE3] hover:underline"
                  }
                >
                  Apps
                </NavLink>
              </li>
              <li className="font-semibold text-xl">
                <NavLink
                  to="/installation"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#632EE3] underline"
                      : "hover:text-[#632EE3] hover:underline"
                  }
                >
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <img className="mr-1 w-10 h-10" src={logoImg} alt="Navbar logo" />
            <Link to="/" className="text-[#632EE3] font-bold text-xl lg:text-2xl">
              MyAppStore
            </Link>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="font-semibold text-xl">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#632EE3] underline"
                    : "hover:text-[#632EE3] hover:underline"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="font-semibold text-xl">
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#632EE3] underline"
                    : "hover:text-[#632EE3] hover:underline"
                }
              >
                Apps
              </NavLink>
            </li>
            <li className="font-semibold text-xl">
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#632EE3] underline"
                    : "hover:text-[#632EE3] hover:underline"
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <Link
            to="https://github.com/mdabdulaziz6236"
            className="hover:bg-[#632EE3] hover:text-white btn font-semibold lg:text-xl"
          >
            <FaGithub /> Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
