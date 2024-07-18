import { IoGrid } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbGps } from "react-icons/tb";

export const sidebarData = [
  {
    id: 1,
    title: "Dashboard",
    icon: IoGrid,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "WatchList",
    icon: MdOutlineWatchLater,
    link: "/watchlist",
  },
  {
    id: 3,
    title: "Top Gainers",
    icon: TfiStatsUp,
    link: "/topcoins",
  },
  {
    id: 4,
    title: "Explore",
    icon: TbGps,
    link: "/explore",
  },
];
