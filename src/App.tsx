import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

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

const queryClient = new QueryClient();

const App = () => {
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
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default App;
