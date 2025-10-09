import React, { useState } from "react";
import useApps from "../hooks/useApps";
import AppCard from "../Components/AppCard";
import { IoSearchSharp } from "react-icons/io5";
import LoadingPage from "./LoadingPage";

const Apps = () => {
  const { apps,loading } = useApps();
  const [search, setSearch] = useState('')
  if (loading ) {
    // return <GridLoader />
    return <LoadingPage></LoadingPage>
  }
  
  const term = search.trim().toLocaleLowerCase()
const searchedApps = term? apps.filter(app => app.title.toLocaleLowerCase().includes(search)): apps

  return (
    <div>
      <div className="flex flex-col justify-center items-center py-10">
        <h1 className=" font-bold text-3xl lg:text-5xl mb-5">Our All Applications</h1>
        <h1 className="font-regular text-xl text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </h1>
      </div>
      <div className="flex justify-between
       items-center">
        <h1 className="font-bold text-xl lg:text-2xl">({searchedApps.length}) Apps Found</h1>
        <label className="input w-40 lg:w-64">
         <div className="text-xl font-semibold">
             <IoSearchSharp></IoSearchSharp>
         </div>
          <input value={search} onChange={e =>setSearch(e.target.value)} className=" font-semibold" type="search" placeholder="Search Apps" />
        </label>
      </div>
      <div className="gap-5 w-11/12 mx-auto py-5 lg:py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {searchedApps.length > 0 ? (searchedApps.map((app) => (
          <AppCard app={app} key={app.id}></AppCard>
        ))):(<h2 className="col-span-full text-center text-5xl py-20 text-red-500 font-bold">
            No App Found
          </h2>)}
      </div>
    </div>
  );
};

export default Apps;
