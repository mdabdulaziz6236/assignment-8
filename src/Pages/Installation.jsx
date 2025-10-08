import React, { useEffect, useState } from "react";
import dImg from "../assets/icon-downloads.png";
import rImg from "../assets/icon-ratings.png";

const Installation = () => {
  const [installed, setInstalled] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("Installed"));
    if (savedList) setInstalled(savedList);
  }, []);

  const sortedItem = (() => {
    if (sortOrder === "download-desc") {
      return [...installed].sort((a, b) => b.downloads - a.downloads);
    } else if (sortOrder === "download-asc") {
      return [...installed].sort((a, b) => a.downloads - b.downloads);
    } else {
      return installed;
    }
  })();

  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("Installed"));
    let updatedList = existingList.filter((p) => p.id !== id);
    setInstalled(updatedList);
    localStorage.setItem("Installed", JSON.stringify(updatedList));
  };

  return (
    <div className="lg:p-20 p-3">
      <div>
        <h1 className="font-bold text-center text-2xl lg:text-5xl mb-4">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 lg:text-xl font-medium text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div>
        <div
          className="flex justify-between
               items-center mb-4"
        >
          <h1 className="font-bold lg:text-2xl">
            ({sortedItem.length}) Apps Found
          </h1>
          <label className="form-control w-full max-w-xs" htmlFor="">
            <select
              className="select select-bordered"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">Sort</option>
              <option value="download-desc">High-&gt;Low</option>
              <option value="download-asc">Low-&gt;High</option>
            </select>
          </label>
        </div>
        <div>
          {sortedItem.map((p) => (
            <div
              key={p.id}
              className="mb-4 flex justify-between items-center shadow rounded-xl p-4"
            >
              <div className="flex items-center">
                <div>
                  <img className="w-10 lg:w-20 lg:h-20" src={p.image} alt="" />
                </div>
                <div className="lg:ml-5 ml-1">
                  <h1>{p.title}</h1>
                  <div className="flex items-center space-x-4 pt-0.5 lg:pt-4">
                    <div className="flex items-center">
                      <img
                        className="lg:w-8 w-5 pr-1 lg:pr-2"
                        src={dImg}
                        alt=""
                      />
                      <p>{p.downloads}M</p>
                    </div>
                    <div className="flex items-center">
                      <img
                        className="lg:w-8 w-5 pr-1 lg:pr-2"
                        src={rImg}
                        alt=""
                      />
                      <p>{p.ratingAvg}</p>
                    </div>
                    <p>{p.size} MB</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleRemove(p.id)}
                className="lg:btn btn-primary btn lg:btn-primary"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
