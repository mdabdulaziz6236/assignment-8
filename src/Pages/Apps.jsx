import React, { useState, useEffect } from "react";
import useApps from "../hooks/useApps";
import AppCard from "../Components/AppCard";
import { IoSearchSharp } from "react-icons/io5";
import LoadingPage from "./LoadingPage";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    if (!apps) return;
    if (search.trim() === "") {
      setFilteredApps(apps);
      setSearchLoading(false);
      return;
    }
    setSearchLoading(true);
    const timeout = setTimeout(() => {
      const term = search.trim().toLowerCase();
      const results = apps.filter((app) =>
        app.title.toLowerCase().includes(term)
      );
      setFilteredApps(results);
      setSearchLoading(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [search, apps]);

  if (loading) return <LoadingPage />;

  return (
    <div>
      <div className="flex flex-col justify-center items-center py-10">
        <h1 className="font-bold text-3xl lg:text-5xl mb-5">
          Our All Applications
        </h1>
        <p className="text-xl text-gray-500 text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between items-center px-5">
        <h1 className="font-bold text-xl lg:text-2xl">
          ({filteredApps.length}) Apps Found
        </h1>
        <label className="input w-40 lg:w-64 flex items-center gap-2 border rounded-lg px-2">
          <IoSearchSharp className="text-xl font-semibold" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Apps"
            className="font-semibold outline-none w-full"
          />
        </label>
      </div>

      {searchLoading ? (
        <div className="flex justify-center items-center py-20">
          <LoadingPage />
        </div>
      ) : (
        <div className="gap-5 w-11/12 mx-auto py-5 lg:py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {filteredApps.length > 0 ? (
            filteredApps.map((app) => <AppCard key={app.id} app={app} />)
          ) : (
            <h2 className="col-span-full text-center text-5xl py-20 text-red-500 font-bold">
              No App Found
            </h2>
          )}
        </div>
      )}
    </div>
  );
};

export default Apps;
