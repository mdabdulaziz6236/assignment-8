import React from "react";
import logoImg from "../assets/logo.png";
import X from '../assets/x.png'
import { Link } from "react-router";
import { FaFacebook, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-black pt-5 ">
     <div className="w-11/12 mx-auto">
         <div className="flex justify-between">
        <div className="flex items-center">
          <img className="mr-1 w-9 lg:w-10 h-10" src={logoImg} alt="Navbar logo" />
          <Link to="/" className="  text-white  font-bold md:text-xl lg:text-2xl">
            MyAppStore
          </Link>
        </div>
        <div >
            <h1 className="text-white lg:text-[18px]">Social Links</h1>
            <p className="text-white lg:text-3xl flex items-center"><FaFacebookSquare className="mr-3"></FaFacebookSquare> <FaInstagramSquare /> <img className="lg:w-10 w-5 ml-2 lg:ml-1" src={X} alt="" /></p>
            
        </div>
      </div>
      <div className="border-t-1 border-gray-500 mt-5">
        <p className="text-center text-white py-5">Copyright © 2025 - All right reserved</p>
      </div>
      
     </div>
    </footer>
  );
};

export default Footer;
