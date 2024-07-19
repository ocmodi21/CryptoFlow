import { useState } from "react";
import Searchbar from "../components/Searchbar";

const Dashboard = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div className="flex lg:hidden w-full mb-4">
        <Searchbar searchText={searchText} setSearchText={setSearchText} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="grid grid-rows-2 grid-cols-1 gap-4">
            <div className="bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md">
              01
            </div>
            <div className="bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md">
              02
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-rows-3 grid-cols-1 gap-4">
            <div className="hidden lg:flex w-full bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md">
              <Searchbar
                searchText={searchText}
                setSearchText={setSearchText}
              />
            </div>
            <div className="bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md">
              04
            </div>
            <div className="bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md">
              05
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
