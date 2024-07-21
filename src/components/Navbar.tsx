import { useState, useEffect } from "react";
import { FiSun } from "react-icons/fi";
import { HiMiniMoon } from "react-icons/hi2";
import IMAGES from "../assets";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
    }
  }, []);

  const handleToggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
    const theme = !isDark ? "dark" : "light";
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="fixed flex flex-row w-screen justify-between items-center py-4 px-5 md:px-8 lg:px-10 bg-light-bgcolor-secondary dark:bg-dark-bgcolor-secondary">
      <Link to="/" className="flex flex-row gap-x-3">
        <button onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? (
            <FaTimes
              size={24}
              className="text-light-font-primary dark:text-dark-font-primary"
            />
          ) : (
            <FaBars
              size={24}
              className="text-light-font-primary dark:text-dark-font-primary"
            />
          )}
        </button>
        <span className="text-light-font-primary dark:text-dark-font-primary text-2xl font-bold">
          CryptoFlow
        </span>
      </Link>
      <div className="flex flex-row gap-x-4 items-center">
        {isDark ? (
          <FiSun
            size={20}
            color="#e4e3e2"
            className="cursor-pointer"
            onClick={handleToggleTheme}
          />
        ) : (
          <HiMiniMoon
            size={20}
            color="#16171a"
            className="cursor-pointer"
            onClick={handleToggleTheme}
          />
        )}
        <div className="flex flex-row gap-x-2 items-center">
          <img
            src={IMAGES.image1}
            alt="logo"
            width={33}
            height={33}
            className="rounded-full"
          />
          <span className="hidden lg:flex font-semibold text-light-font-primary dark:text-dark-font-primary">
            Om Modi
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
