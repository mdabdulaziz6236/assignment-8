import React from "react";
import iconDownload from "../assets/icon-downloads.png";
import iconRating from "../assets/icon-ratings.png";
import { Link } from "react-router";
const AppCard = ({ app }) => {
  const { ratingAvg, downloads, id, title, image } = app;
  return (
    <div >
      <Link to={`/apps/${id}`}>
        <div className="p-5  flex flex-col rounded-[8px] shadow hover:shadow-2xl hover:scale-105 transition ease-in-out">
          <div className="flex flex-1 justify-center items-center">
            <img className="w-full rounded-xl" src={image} alt="app" />
          </div>
          <div>
            <h2 className="my-5 text-xl font-semibold text-center">{title}</h2>
            <div className="flex justify-between">
              <div className="bg-[#E0E5D4] px-3 py-2 flex items-center rounded-xl">
                <img className="w-5 mr-1.5" src={iconDownload} alt="" />
                {downloads}
              </div>
              <div className="bg-[#FFF0E1] px-3 py-2 flex items-center rounded-xl">
                <img className="w-5 mr-1.5" src={iconRating} alt="" />
                {ratingAvg}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AppCard;
