import { useState } from "react";
import CoinDetailsTable from "../components/CoinDetailsTable";
import Searchbar from "../components/Searchbar";
import { Link } from "react-router-dom";
import GlobalGraph from "../components/GlobalGraph";

const Dashboard = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="h-full">
      <div className="flex lg:hidden w-full mb-3">
        <Searchbar searchText={searchText} setSearchText={setSearchText} />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col mb-4 bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md px-4 py-3">
          <div className="flex flex-row justify-between mb-3">
            <span className="text-lg text-light-font-primary dark:text-dark-font-primary font-medium">
              Trending Market
            </span>
          </div>
          <div className="h-72 w-full">
            <GlobalGraph />
          </div>
        </div>
        <div className="bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md px-4 py-3">
          <div className="flex flex-row justify-between mb-3">
            <span className="text-lg text-light-font-primary dark:text-dark-font-primary font-medium">
              Trending Market
            </span>
            <Link to={"/explore"}>
              <span className="text-main text-sm font-semibold">
                View more coins
              </span>
            </Link>
          </div>
          <CoinDetailsTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
