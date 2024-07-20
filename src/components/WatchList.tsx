import { Link } from "react-router-dom";
import SideTable from "./SideTable";

const WatchList = () => {
  return (
    <div className="flex flex-col w-full px-4 py-3">
      <div className="flex flex-row justify-between">
        <span className="text-light-font-primary dark:text-dark-font-primary font-medium">
          WatchList
        </span>
        <Link to={"/watchlist"}>
          <span className="text-main text-sm font-semibold">
            View more coins
          </span>
        </Link>
      </div>

      <div>
        <SideTable />
      </div>
    </div>
  );
};

export default WatchList;
