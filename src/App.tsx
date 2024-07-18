import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

//pages
import Dashboard from "./pages/Dashboard";
import Watchlist from "./pages/Watchlist";
import TopGainerCoins from "./pages/TopGainerCoins";
import Explore from "./pages/Explore";

import "./index.css";

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
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="watchlist" element={<Watchlist />} />
          <Route path="topcoins" element={<TopGainerCoins />} />
          <Route path="explore" element={<Explore />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
