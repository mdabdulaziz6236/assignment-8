import { useParams } from "react-router";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Rectangle,
} from "recharts";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import dIcon from "../assets/icon-downloads.png";
import rIcon from "../assets/icon-ratings.png";
import revIcon from "../assets/icon-review.png";
import useApps from "../hooks/useApps";
import LoadingPage from "./LoadingPage";
import AppErrorPage from "./AppErrorPage";

const AppDetails = () => {
  const { apps, loading } = useApps();
  const { id } = useParams();

  // Initialize button disabled state based on localStorage
  const [isDisabled, setDisabled] = useState(() => {
    const existingList = JSON.parse(localStorage.getItem("Installed")) || [];
    return existingList.some((app) => app.id === Number(id));
  });

  if (loading) {
    return <LoadingPage />;
  }

  const app = apps.find((a) => a.id === Number(id));
  if (!app) return <AppErrorPage />;

  const {
    title,
    image,
    ratingAvg,
    description,
    downloads,
    reviews,
    companyName,
    size,
    ratings,
  } = app;

  const handleAddToInstallation = () => {
    // Prevent adding duplicate
    const existingList = JSON.parse(localStorage.getItem("Installed")) || [];
    const isDuplicate = existingList.some((p) => p.id === app.id);
    if (isDuplicate) return;

    // Add app to localStorage
    const updatedList = [...existingList, app];
    localStorage.setItem("Installed", JSON.stringify(updatedList));

    // Show toast
    toast.success("App Installed!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

    // Disable button
    setDisabled(true);
  };

  return (
    <div className="my-5 lg:my-10">
      <ToastContainer />
      <div className="p-5 flex flex-col lg:flex-row">
        {/* Left Image */}
        <div>
          <img src={image} alt="App" className="w-60 rounded-lg" />
        </div>

        {/* Right Details */}
        <div className="mt-10 lg:mt-0 lg:ml-10">
          <h1 className="font-bold text-3xl mb-2">{title}</h1>
          <p>
            Developed by{" "}
            <span className="text-blue-700 font-bold">{companyName}</span>
          </p>

          <div className="flex items-center mt-5">
            {/* Downloads */}
            <div className="flex flex-col items-center text-center">
              <img className="w-10 h-10" src={dIcon} alt="" />
              <p className="mt-2">Downloads</p>
              <p className="font-extrabold text-[28px]">{downloads}M</p>
            </div>

            {/* Ratings */}
            <div className="flex flex-col items-center text-center ml-8">
              <img className="w-10 h-10" src={rIcon} alt="" />
              <p className="mt-2">Average Rating</p>
              <p className="font-extrabold text-[28px]">{ratingAvg}</p>
            </div>

            {/* Reviews */}
            <div className="flex flex-col items-center text-center ml-8">
              <img className="w-10 h-10" src={revIcon} alt="" />
              <p className="mt-2">Reviews</p>
              <p className="font-extrabold text-[28px]">{reviews}</p>
            </div>
          </div>

          {/* Install Button */}
          <button
            disabled={isDisabled}
            onClick={handleAddToInstallation}
            className={`mt-5 py-2 px-4 rounded text-white font-semibold ${
              isDisabled
                ? "bg-gray-500"
                : "hover:bg-[#632EE3] hover:text-white bg-[#00B87C]"
            }`}
          >
            {isDisabled ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      <hr className="border-gray-500 my-10" />

      {/* Ratings Chart */}
      <div>
        <h3 className="font-bold text-2xl mb-4">Ratings</h3>
        <div className="bg-base-100 rounded-xl p-4 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={[...ratings].reverse()} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="count"
                fill="#FF8811"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <hr className="border-gray-500 my-10" />

      {/* Description */}
      <div>
        <p className="font-bold text-2xl mb-2">Description:</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
