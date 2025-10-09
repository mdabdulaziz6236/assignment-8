import React from "react";
import { Link } from "react-router";
import playStoreImg from "../assets/playStore.png";
import appStoreImg from "../assets/appStore.png";
import heroImg from "../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <div>
        <div className="text-center pt-10 lg:pt-20">
          <h1 className="font-extrabold text-6xl">We Build</h1>
          <h1 className="mt-5 font-extrabold text-6xl">
            <span className="text-[#9F62F2]">Productive</span> Apps
          </h1>
          <p className="text-gray-500 font-medium mt-4">
            At{" "}
            <span className="text-green-500 font-bold underline">
              My App Store
            </span>{" "}
            , we craft innovative apps designed to make everyday life simpler,
            smarter, and more exciting.<br></br> Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
        </div>
        <div className="flex justify-center items-center py-5 lg:py-10 space-x-4">
          <Link to="https://play.google.com/store/apps">
            <button className="btn hover:bg-[#632EE3] hover:text-white ">
              <img className="w-5 rounded" src={playStoreImg} alt="" /> Google Play
            </button>
          </Link>
          <Link to="https://apps.apple.com">
            <button className="btn hover:bg-[#632EE3] hover:text-white ">
              <img className="w-5 rounded" src={appStoreImg} alt="" /> App Store
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center pt-10">
          <img src={heroImg} alt="" />
        </div>
      </div>
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-10 lg:py-20 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
          Trusted by Millions, Built for You
        </h1>
        {/* Count section of App */}
        <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-8 sm:space-y-0 pt-10">
          {/* 1️ Total Downloads */}
          <div className="flex flex-col items-center">
            <p className="text-sm sm:text-base">Total Downloads</p>
            <p className="font-extrabold py-3 text-4xl sm:text-5xl md:text-6xl">
              <span>52M</span>
            </p>
            <p className="text-xs sm:text-sm opacity-90">
              21% more than last month
            </p>
          </div>

          {/* 2️ Total Reviews */}
          <div className="flex flex-col items-center">
            <p className="text-sm sm:text-base">Total Reviews</p>
            <p className="font-extrabold py-3 text-4xl sm:text-5xl md:text-6xl">
              <span>906K</span>
            </p>
            <p className="text-xs sm:text-sm opacity-90">
              46% more than last month
            </p>
          </div>

          {/* 3️ Active Apps */}
          <div className="flex flex-col items-center">
            <p className="text-sm sm:text-base">Active Apps</p>
            <p className="font-extrabold py-3 text-4xl sm:text-5xl md:text-6xl">
              <span>20+</span>
            </p>
            <p className="text-xs sm:text-sm opacity-90">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
