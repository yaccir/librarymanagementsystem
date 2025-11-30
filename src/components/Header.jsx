import React, { useState } from "react";
import Search from "./Search";
import Browse from "./Browse";
import Home from "./Home";
import AddBook from "./AddBook";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header className="flex h-20 items-center w-full px-4 bg-[#0b0b0b]">
        {/* Left Section */}
        <div className="flex items-center gap-2 w-1/2 sm:w-1/3">
          <img
            src="../src/images/icon.png"
            alt=""
            className="w-14 rounded-2xl bg-transparent"
          />
          <h1 className="text-2xl sm:text-3xl text-white font-semibold">
            Online Library
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-3xl sm:hidden ml-auto"
        >
          ☰
        </button>

        {/* Navigation */}
        <nav
          className={`${
            open ? "block" : "hidden"
          } absolute top-20 left-0 w-full bg-[#0b0b0b] sm:bg-transparent sm:static sm:flex sm:w-2/3 sm:justify-end`}
        >
          <ul className="flex flex-col sm:flex-row sm:items-center px-4 sm:px-0">
            <li className="py-2 sm:py-0 sm:mr-3">
              <Search />
            </li>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 sm:w-auto py-2 sm:py-0">
              <li className="py-2 sm:py-0">
                <Home />
              </li>
              <li className="py-2 sm:py-0">
                <Browse />
              </li>
              <li className="py-2 sm:py-0">
                <AddBook />
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
