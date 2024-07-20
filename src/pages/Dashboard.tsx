import { useState } from "react";
import CoinDetailsTable from "../components/CoinDetailsTable";
import Searchbar from "../components/Searchbar";

const Dashboard = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <div className="flex lg:hidden w-full mb-3">
        <Searchbar searchText={searchText} setSearchText={setSearchText} />
      </div>
      <div className="flex flex-col gap-3">
        <div className="bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md">
          01
        </div>
        <div className="bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md px-4 py-3">
          <CoinDetailsTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
