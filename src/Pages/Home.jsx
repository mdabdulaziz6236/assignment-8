
import { Link} from "react-router";
import AppCard from "../Components/AppCard";
import useApps from "../hooks/useApps";

const Home = () => {
    const {apps, loading, error} = useApps()
    console.log(apps, loading, error)
  
  const slicedApp = apps.slice(0,8)

  return (
    <div className="">
      <div className="text-center">
        <h1 className="font-bold my-5 text-3xl lg:text-[48px]">Trending Apps</h1>
        <p className="font-medium  pb-3 lg:text-xl text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="gap-5 py-5 lg:py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {slicedApp.map((app) => (
          <AppCard app={app} key={app.id}></AppCard>
        ))}
      </div>
      <div className="flex justify-center items-center pb-20 ">
        <Link to='/apps'><button className="text-white rounded-[8px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-xl font-semibold hover:bg-pink-500 hover:text-white px-3 py-2">Show All</button></Link>
      </div>
    </div>
  );
};

export default Home;
