import { useState } from "react";
import Searchbar from "../components/Searchbar";
import WatchList from "../components/WatchList";
import TopGainers from "../components/TopGainers";
import TopLosers from "../components/TopLosers";

const Dashboard = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div className="flex lg:hidden w-full mb-3">
        <Searchbar searchText={searchText} setSearchText={setSearchText} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="lg:col-span-2">
          <div className="grid grid-rows-2 grid-cols-1 gap-3">
            <div className="bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md">
              01
            </div>
            <div className="bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md">
              02
            </div>
          </div>
        </div>
        <div>
          <div className="hidden lg:flex w-full h-12 mb-3 bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md">
            <Searchbar searchText={searchText} setSearchText={setSearchText} />
          </div>
          <div className="grid grid-rows-3 grid-cols-1 gap-y-3">
            <div className="flex w-full bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md">
              <WatchList />
            </div>
            <div className="flex w-full bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md">
              <TopGainers />
            </div>
            <div className="flex w-full bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md">
              <TopLosers />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
