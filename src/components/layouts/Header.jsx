import React from "react";
import logo from "../../assets/img/Logo.png";
import { Link, NavLink } from "react-router-dom";
import ThemeToggler from "../themeToggler/ThemeToggler";

const Header = () => {
  return (
    <header className="py-5 bg-white sticky top-0 w-full z-10  shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo meta blog" />
        </Link>
        <ul className="hidden lg:flex gap-[40px] ">
          <li>
            <NavLink
              className="text-[#3B3C4A]s"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "2px solid black" : "",
                };
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="text-[#3B3C4A]" to="#">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className="text-[#3B3C4A]" to="#">
              Pages
            </NavLink>
          </li>
          <li>
            <NavLink className="text-[#3B3C4A]" to="#">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="text-[#3B3C4A]" to="#">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="hidden lg:flex items-center gap-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#F4F4F5] outline-none w-[166px] h-[36px] px-3 rounded-md"
            />
            <svg
              className="absolute right-3 bottom-2.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2Z"
                stroke="#52525B"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
              <path
                d="M10.5718 10.5716L14.0002 14"
                stroke="#52525B"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <ThemeToggler />
        </div>
        <svg
          className="lg:hidden"
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"
            fill="#000000"
          />
        </svg>
      </nav>
    </header>
  );
};

export default Header;
