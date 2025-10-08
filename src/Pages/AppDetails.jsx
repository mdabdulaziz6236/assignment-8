import { useParams } from "react-router";

import dIcon from "../assets/icon-downloads.png";
import rIcon from "../assets/icon-ratings.png";
import revIcon from "../assets/icon-review.png";
import useApps from "../hooks/useApps";
import { useState } from "react";

const AppDetails = () => {
  const [isDisabled, setDisabled] = useState(false);
  const { apps, loading } = useApps();

  const { id } = useParams();

  // const app = apps.find(a => String(a.id) ===id)
  const app = apps.find((a) => a.id === Number(id));
  if (loading) {
    return <p>Loading app details...</p>;
  }

  const {
    title,
    image,
    ratingAvg,
    description,
    downloads,
    reviews,
    companyName,
    size,
  } = app;

  const handleAddToInstallation = () => {
    setDisabled(true);
    const existingList = JSON.parse(localStorage.getItem("Installed"));
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some(p => p.id === app.id)
      if(isDuplicate) return
      updatedList = [...existingList, app];
    } else {
      updatedList.push(app);
    }
    localStorage.setItem("Installed", JSON.stringify(updatedList));
  };
  return (
    <div className="my-5 lg:my-10">
      <div className="p-5 flex flex-col lg:flex-row  ">
        <div className=" ">
          <img src={image} alt="Apps image" />
        </div>
        <div className="mt-10 lg:mt-0 lg:ml-10">
          <div>
            <h1 className="font-bold text-3xl mb-2">{title}</h1>
            <p>
              Developed by{" "}
              <span className="text-blue-700 font-bold">{companyName}</span>
            </p>
          </div>
          <div className="flex   items-center mt-3">
            <div className="flex   flex-col">
              <img className="w-10 h-10" src={dIcon} alt="" />
              <p className="mt-2">Downloads</p>
              <p className="font-extrabold text-[33px]">{downloads}M</p>
            </div>
            <div className=" flex items-center justify-center flex-col ml-5">
              <img className="w-10 h-10" src={rIcon} alt="" />
              <p className="mt-2">Average Ratings</p>
              <p className="font-extrabold text-[33px]">{ratingAvg}</p>
            </div>
            <div className="flex items-center justify-center flex-col ml-5">
              <img className="w-10" src={revIcon} alt="" />
              <p className="mt-2">Total Reviews</p>
              <p className="font-extrabold text-[33px]">{reviews}</p>
            </div>
          </div>
          <div>
            <button
              disabled={isDisabled}
              onClick={handleAddToInstallation}
              className={`py-2 px-3 rounded text-white font-semibold bg-[#00D390] ${
                isDisabled ? "font-extrabold" : ""
              }`}
            >
              {isDisabled ? (
                "Installed"
              ) : (
                <>
                  {isDisabled ? (
                    "Installed"
                  ) : (
                    <>
                      Install Now (<span>{size}</span> MB)
                    </>
                  )}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-500 my-10" />

      <div className="">
        <p className="font-bold text-2xl">Description:</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
