import { useState } from "react";
import CoinDetailsTable from "../components/CoinDetailsTable";
import Searchbar from "../components/Searchbar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <div className="flex md:hidden w-full mb-3">
        <Searchbar searchText={searchText} setSearchText={setSearchText} />
      </div>
      <div className="flex flex-col gap-3">
        <div className="bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md">
          01
        </div>
        <div className="bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md px-4 py-3">
          <div className="flex flex-row justify-between mb-3">
            <span className="text-xl text-light-font-primary dark:text-dark-font-primary font-medium">
              Trending Market
            </span>
            <Link to={"/watchlist"}>
              <span className="text-main text-md font-semibold">
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
