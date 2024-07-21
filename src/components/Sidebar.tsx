import { NavLink, Outlet } from "react-router-dom";
import { sidebarData } from "../utils/sidebarData";
import TopGainers from "./TopGainers";
import TopLosers from "./TopLosers";
import { useState } from "react";
import Searchbar from "./Searchbar";
interface SidebarTitleType {
  id: number;
  title: string;
  icon: any;
  link: string;
}

const Sidebar = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="fixed flex flex-row w-screen h-screen bg-light-bgcolor-secondary dark:bg-dark-bgcolor-secondary mt-16">
      <div className="hidden lg:flex flex-col lg:w-72 py-5 pl-10 pr-4 gap-y-4">
        {sidebarData.map((item: SidebarTitleType) => (
          <NavLink
            to={item.link}
            key={item.id}
            className={({ isActive }) =>
              isActive
                ? "text-main"
                : "text-light-font-primary dark:text-dark-font-primary"
            }
          >
            <div className="flex flex-row gap-x-3 items-center text-lg font-medium">
              <item.icon />
              {item.title}
            </div>
          </NavLink>
        ))}
      </div>
      <div className="h-screen w-screen px-5 md:px-8 lg:pl-3 py-5 lg:pr-10 bg-light-bgcolor-secondary dark:bg-dark-bgcolor-secondary overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div className="lg:h-[calc(100vh-6rem)] lg:col-span-2 overflow-y-auto">
            <Outlet />
          </div>

          <div className="mb-16 lg:mb-0">
            <div className="hidden lg:flex w-full mb-3">
              <Searchbar
                searchText={searchText}
                setSearchText={setSearchText}
              />
            </div>
            <div className="grid grid-rows-2 grid-cols-1 gap-y-3">
              <div className="flex w-full bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md">
                <TopGainers />
              </div>
              <div className="flex w-full bg-light-bgcolor-primary dark:bg-dark-bgcolor-primary rounded-md">
                <TopLosers />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
