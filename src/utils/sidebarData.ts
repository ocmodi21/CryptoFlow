import { IoGrid } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";
import { TfiStatsDown } from "react-icons/tfi";
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
    title: "Explore",
    icon: TbGps,
    link: "/explore",
  },
  {
    id: 3,
    title: "Top Gainers",
    icon: TfiStatsUp,
    link: "/topgainers",
  },
  {
    id: 4,
    title: "Top Losers",
    icon: TfiStatsDown,
    link: "/toplosers",
  },
];
