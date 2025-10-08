import React, { useState } from "react";
import useApps from "../hooks/useApps";
import AppCard from "../Components/AppCard";
import { IoSearchSharp } from "react-icons/io5";

const Apps = () => {
  const { apps } = useApps();
  // console.log(apps)
  const [search, setSearch] = useState('')
  const term = search.trim().toLocaleLowerCase()
const searchedApps = term? apps.filter(app => app.title.toLocaleLowerCase().includes(search)): apps
//   console.log(searchedApps)
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-10">
        <h1 className=" font-bold text-5xl mb-5">Our All Applications</h1>
        <h1 className="font-regular text-xl text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </h1>
      </div>
      <div className="flex justify-between
       items-center">
        <h1 className="font-bold text-2xl">({searchedApps.length}) Apps Found</h1>
        <label className="input">
         <div className="text-xl font-semibold">
             <IoSearchSharp></IoSearchSharp>
         </div>
          <input value={search} onChange={e =>setSearch(e.target.value)} className=" font-semibold" type="search" placeholder="Search Apps" />
        </label>
      </div>
      <div className="gap-5 py-5 lg:py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {searchedApps.map((app) => (
          <AppCard app={app} key={app.id}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
