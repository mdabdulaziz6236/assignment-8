import React from "react";
import useApps from "../hooks/useApps";
import AppCard from "../Components/AppCard";

const Apps = () => {
  const { apps } = useApps();
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-10">
        <h1 className=" font-bold text-5xl mb-5">Our All Applications</h1>
        <h1 className="font-regular text-xl text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </h1>
      </div>
      <div className="gap-5 py-5 lg:py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {apps.map((app) => (
          <AppCard app={app} key={app.id}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
