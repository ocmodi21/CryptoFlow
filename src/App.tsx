import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";

//components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

//pages
import Dashboard from "./pages/Dashboard";
import Watchlist from "./pages/Watchlist";
import TopGainerCoins from "./pages/TopGainerCoins";
import TopLoserCoins from "./pages/TopLoserCoins";
import Explore from "./pages/Explore";

import "./index.css";
import { CoinDataType, setCoinData } from "./redux/slice/CoinDataSlice";

const App = () => {
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const { data } = useQuery({
    queryKey: [""],
    queryFn: () => fetchData("markets", "usd"),
    // staleTime: 45 * 1000,
  });

  const fetchData = async (endpoint: string, currency: string) => {
    const data = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/${endpoint}?x_cg_demo_api_key=${
        import.meta.env.VITE_API_KEY
      }&&vs_currency=${currency}`
    );

    const res = await data.data;

    let coinData: CoinDataType[] = [];
    if (res) {
      res.map((item: CoinDataType) => {
        const coin = {
          market_cap_rank: item.market_cap_rank,
          image: item.image,
          symbol: item.symbol,
          current_price: item.current_price,
          high_24h: item.low_24h,
          low_24h: item.low_24h,
          ath: item.ath,
          market_cap: item.market_cap,
        };
        coinData.push(coin);
      });
      dispatch(setCoinData(coinData));
    }
  };

  if (data) {
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="explore" element={<Explore />} />
          <Route path="watchlist" element={<Watchlist />} />
          <Route path="topgainer" element={<TopGainerCoins />} />
          <Route path="toploser" element={<TopLoserCoins />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
