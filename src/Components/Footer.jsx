import React from "react";
import logoImg from "../assets/logo.png";
import X from "../assets/x.png";
import { Link } from "react-router";
import playStoreImg from "../assets/playStore.png";
import appStoreImg from "../assets/appStore.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A2E] pt-10">
      <div className="w-11/12 mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
          {/* Logo & App Name */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:w-1/4">
            <img
              className="mr-1 w-9 lg:w-10 h-10 mb-3 md:mb-0"
              src={logoImg}
              alt="Navbar logo"
            />
            <Link
              to="/"
              className="text-white font-bold md:text-xl lg:text-2xl"
            >
              MyAppStore
            </Link>
          </div>

          {/* Quick Links */}
          <div className="text-white md:w-1/4">
            <h2 className="text-lg lg:text-[18px] font-semibold mb-3">
              Quick Links
            </h2>
            <ul>
              <li className="mb-2 hover:text-purple-400">
                <Link to="/">Home</Link>
              </li>
              <li className="mb-2 hover:text-purple-400">
                <Link to="/apps">Apps</Link>
              </li>
              <li className="mb-2 hover:text-purple-400">
                <Link to="/about">About Us</Link>
              </li>
              <li className="mb-2 hover:text-purple-400">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="mb-2 hover:text-purple-400">
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-white md:w-1/4">
            <h2 className="text-lg lg:text-[18px] font-semibold mb-3">
              Social Links
            </h2>
            <div className="flex items-center gap-3 text-3xl lg:text-4xl">
              <FaFacebookSquare className="hover:text-blue-600 cursor-pointer" />
              <FaInstagramSquare className="hover:text-pink-500 cursor-pointer" />
              <FaTwitterSquare className="hover:text-blue-400 cursor-pointer" />
              <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
              <img className="lg:w-10 w-5 ml-2 lg:ml-1" src={X} alt="" />
            </div>
          </div>

          {/* Newsletter */}
          <div className="text-white md:w-1/4">
            <h2 className="text-lg lg:text-[18px] font-semibold mb-3">
              Our Apps Store
            </h2>
            <p className="mb-3 text-sm lg:text-base">
              Subscribe to our Apps for the latest updates and offers!
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-md text-white w-full"
              />
              <button className="bg-purple-600 hover:bg-purple-800 p-2 rounded-r-md font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* App Download Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-5 md:gap-0">
          <p className="text-white text-sm md:text-base">Download Our App:</p>
          <div className="flex justify-center items-center py-5 lg:py-10 space-x-4">
  <Link to="https://play.google.com/store/apps">
    <button className="btn btn-primary hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300">
      <img className="w-5 rounded" src={playStoreImg} alt="" /> Google Play
    </button>
  </Link>
  <Link to="https://apps.apple.com">
    <button className="btn btn-primary hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-600 hover:text-white transition-all duration-300">
      <img className="w-5 rounded" src={appStoreImg} alt="" /> App Store
    </button>
  </Link>
</div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-500 mt-8">
          <p className="text-center text-white py-5 text-sm md:text-base">
            Copyright © 2025 - All rights reserved | Designed by MyAppStore
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
